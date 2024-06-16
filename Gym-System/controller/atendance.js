let MemberData;

function fetchMembersData() {
  fetch("http://localhost:3000/members")
    .then((response) => response.json())
    .then((data) => {
      MemberData = data;
      for (let i = 0; i < MemberData.length; i++) {
        addMemberAtendance(MemberData[i], i);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function addMemberAtendance(data, i) {
  var atendance;

  var registrationDate = new Date(data.dor);
  var today = new Date();
  var timeDiff = registrationDate.getTime() - today.getTime();
  var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  atendance = daysRemaining + data.plan * 30 + " Days";

  if (atendance <= 0) {
    atendance = "None";
  }

  var newRow =
    `<tbody>
                    <tr>
                      <td><div class="text-center">` +
    (i + 1) +
    `</div></td>
                      <td><div class="text-center">` +
    data.fullname +
    `</div></td>
                      <td><div class="text-center">` +
    data.plan +
    ` Months</div></td>
                      <td><div class="text-center">` +
    atendance +
    `</div></td>
                    </tr>
                  </tbody>`;
  $(".table").append(newRow);
}

fetchMembersData();
