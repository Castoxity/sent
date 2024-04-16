document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        var name = document.getElementById("name").value;
        var num = document.getElementById("num").value;
        var mail = document.getElementById("mail").value;
        document.querySelector(".changed-name").textContent = name;
        document.querySelector(".changed-num").textContent = num;
        document.querySelector(".changed-mail").textContent = mail;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const personalBtn = document.querySelector(".personal");
    const personalInput = document.getElementById("personalImageInput");
    const companyBtn = document.querySelector(".company");
    const companyInput = document.getElementById("companyImageInput");
    const cardContainer = document.getElementById("cardContainer");

    personalBtn.addEventListener("click", function() {
        personalInput.click();
    });

    personalInput.addEventListener("change", function() {
        handleImageUpload(personalInput.files[0]);
    });

    companyBtn.addEventListener("click", function() {
        companyInput.click();
    });

    companyInput.addEventListener("change", function() {
        handleImageUpload(companyInput.files[0]);
    });

    function handleImageUpload(file) {
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Uploaded Image";
                img.classList.add("uploaded-image");
                const uploadedImagesContainer = document.querySelector(".uploaded-images");
                uploadedImagesContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
});