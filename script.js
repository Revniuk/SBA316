<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Cycling Badge</title>
</head>

<body>
    <div class="container">
        <div class="left">
            <img src="cycling_badge.png" alt="Badge Image">
            <p>Learning to ride a bike is an excellent way to practice balance, perseverance, and self-assurance! Biking
                can be a lifelong way to travel, relax, and exercise.</p>
        </div>
        <div class="right">
            <h1>Cycling</h1>
            <p>Cycling is an enjoyable activity for people of all ages. There are many reasons people ride bicycles.
                They may ride just for fun, for exercise, for transportation, or for the sport of racing. To learn more
                about bicycling, you can go to a bike shop, find a cycling club, go to the library, or check the
                Internet.</p>

            <div class="additional-info" id="additionalInfo">
                <p>Prior to beginning this badge, adults helping girls are required to review AHG's Health and Safety
                    Policies and Guidelines.</p>
                <p><strong>Did the helping adult review AHG's Health and Safety Policies and Guidelines?</strong></p>

                <label for="reviewCheckbox">Yes</label>
                <input type="checkbox" id="reviewCheckbox">

                <label for="noReviewCheckbox">No</label>
                <input type="checkbox" id="noReviewCheckbox">

                <button onclick="checkReview()">Submit</button>
            </div>

            <div id="checkLevel" style="display: none;">
                <h2>Check Level</h2>
                <p>What is your AHG Program level?</p>
                <input type="radio" id="tenderheart" name="level" value="Tenderheart">
                <label for="tenderheart">Tenderheart</label><br>
                <input type="radio" id="explorer" name="level" value="Explorer">
                <label for="explorer">Explorer</label><br>
                <button onclick="navigateToBlock()">Go</button>
            </div>

            <div id="tenderheartBlock" style="display: none;">
                <!-- Add your Tenderheart content here -->
                <p>Tenderheart Block</p>
            </div>

            <div id="explorerBlock" style="display: none;">
                <!-- Add your Explorer content here -->
                <p>Explorer Block</p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
