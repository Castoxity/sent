// domcontentloaded will make sure the js code gets read after the initial html code is completely loaded to prevent 
// any future value to appear before the initial ones
// changes the values on the card after pressing the Save button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("SubmitBtn").addEventListener("click", function() {
        var name = document.getElementById("Name").value;
        var num = document.getElementById("Num").value;
        var mail = document.getElementById("Mail").value;
        document.querySelector(".Changed-Name").textContent = name;
        document.querySelector(".Changed-Num").textContent = num;
        document.querySelector(".Changed-Mail").textContent = mail;
    });
});
// changes the value of image being inserted through the buttons in details box
document.addEventListener("DOMContentLoaded", function() {
    const personalBtn = document.querySelector(".Personal");
    const personalInput = document.getElementById("PersonalImageInput");
    const companyBtn = document.querySelector(".Company");
    const companyInput = document.getElementById("CompanyImageInput");
    const cardContainer = document.getElementById("CardContainer");

    personalBtn.addEventListener("click", function() {
        personalInput.click();
    });

    personalInput.addEventListener("change", function() {
        HandleImageUpload(personalInput.files[0]);
    });

    companyBtn.addEventListener("click", function() {
        companyInput.click();
    });

    companyInput.addEventListener("change", function() {
        HandleImageUpload(companyInput.files[0]);
    });

    function HandleImageUpload(file) {
        if (file) {
            const READER = new FileReader();
            READER.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Uploaded Image";
                img.classList.add("Uploaded-Image");
                const uploadedImagesContainer = document.querySelector(".Uploaded-Images");
                uploadedImagesContainer.appendChild(img);
            };
            READER.readAsDataURL(file);
        }
    }
});