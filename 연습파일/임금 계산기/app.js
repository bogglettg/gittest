const wage = parseInt(prompt("월급을 입력해 주세요"));

const nationalin = wage * 0.09;
const healthin = wage * 0.03545;
const longHealthIn = wage * 0.06405;
const sanJaeIn = wage * 0.1063;

const totalIn = nationalin + longHealthIn + healthin + sanJaeIn;
if (isNaN(wage)) {
    alert("월급을 제대로 입력했는지 확인하시고 새로고침하여 다시 입력해 주세요");
} else {
    console.log("국민연금료 " + nationalin + "원");
    console.log("건강보험료 " + healthin + "원");
    console.log("장기요양보험료 " + longHealthIn + "원");
    console.log("산재보험료" + sanJaeIn + "원");
    console.log("총 보험료 = " + totalIn + "원");
}
