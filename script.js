
// Cache elements
var reviewCheckbox = document.getElementById("reviewCheckbox");
var noReviewCheckbox = document.getElementById("noReviewCheckbox");
var additionalInfo = document.getElementById("additionalInfo");
var checkLevel = document.getElementById("checkLevel");

var tenderheart = document.getElementById("tenderheart");
var explorer = document.getElementById("explorer");
var tenderheartBlock = document.getElementById("tenderheartBlock");
var explorerBlock = document.getElementById("explorerBlock");

// Event listener registration
reviewCheckbox.addEventListener("change", toggleAdditionalInfo);
noReviewCheckbox.addEventListener("change", toggleAdditionalInfo);
tenderheart.addEventListener("change", toggleTaskBlocks);
explorer.addEventListener("change", toggleTaskBlocks);

// Event handler functions
function checkReview() {
    if (reviewCheckbox.checked && noReviewCheckbox.checked) {
        alert("Please select either 'Yes' or 'No', not both.");
    } else if (reviewCheckbox.checked) {
        additionalInfo.style.display = "block";
        checkLevel.style.display = "block";
    } else if (noReviewCheckbox.checked) {
        alert("Please ask your helping adult to review AHG's Health and Safety Policies and Guidelines");
    }
}

function toggleAdditionalInfo() {
    additionalInfo.style.display = (reviewCheckbox.checked || noReviewCheckbox.checked) ? "block" : "none";
}

function toggleTaskBlocks() {
    tenderheartBlock.style.display = tenderheart.checked ? "block" : "none";
    explorerBlock.style.display = explorer.checked ? "block" : "none";
}
