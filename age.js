function calculateAge() {

    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("DOB select karo bhai 😅");
        return;
    }

    const today = new Date();
    const birthDate = new Date(dobValue);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += lastMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        alert("Pehle paida to ho ja bhai,😂");
        document.getElementById("years").innerText = "-";
        document.getElementById("months").innerText = "-";
        document.getElementById("days").innerText = "-";
        return;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;

    // 🎂 Birthday glow
    document.querySelectorAll(".box").forEach(b => b.classList.remove("birthday"));
    if (months === 0 && days === 0) {
        document.querySelectorAll(".box").forEach(b => b.classList.add("birthday"));
    }
}

// 🌙 Dark / Light Mode
function toggleTheme(){
    document.body.classList.toggle("dark");
}
