document.addEventListener("DOMContentLoaded", () => {
    const worldsContainer = document.querySelector(".worlds");
    const worldLoader = document.querySelector(".wait"); // Loader
    const blurOverlay = document.querySelector(".blur-overlay");

    const worlds = [
        `<div class="world">
            <div class="image-container">
                <img src="https://files.fm/thumb_show.php?i=xcbhvgmsme" data-images='["https://files.fm/thumb_show.php?i=xcbhvgmsme","https://files.fm/thumb_show.php?i=gagavsau7m"]' alt="SMP World 1" class="expandable-img">
                <span class="expand-text">Expand Image</span>
            </div>
            <h3>SMP World 1</h3>
            <p>Latest Backup: 18/12/2021<br>Version: 1.18.1?<br>World Size: 2.83Gb</p>
            <button class="btn2 toggle-description">Full Description</button>
            <div class="full-description"><p>Cause: World was finished <br> Cords for the base: 253, 86, 385</p></div>
            <a href="https://mega.nz/file/sY4FRBKT#BjCQUGVKLSl_f2OTAN15DzVZaoUTCBOdaO1j76mNWZk" target="_blank" class="btn3">Download</a>
        </div>`,
        `<div class="world">
            <div class="image-container">
                <img src="https://files.fm/thumb_show.php?i=c6vkchw8c6" data-images='["https://files.fm/thumb_show.php?i=c6vkchw8c6","https://files.fm/thumb_show.php?i=umapfqexsa"]' alt="SMP World 2" class="expandable-img">
                <span class="expand-text">Expand Image</span>
            </div>
            <h3>SMP World 2</h3>
            <p>Latest Backup: 22/10/2022<br>Version: 1.18.2 Forge<br>World Size: 686Mb</p>
            <button class="btn2 toggle-description">Full Description</button>
            <div class="full-description"><p>Cause: Interest was lost and bad mod choices <br> Cords for the base: -224, 100, -392</p></div>
            <a href="https://mega.nz/file/dAB0VCYD#YZj369gIqFSsTS7nvP-lM5LpDmkuriKSxBv1NHWIZVo" target="_blank" class="btn3">Download</a>
        </div>`,
        `<div class="world">
                        <div class="image-container">
                        <img src="https://files.fm/thumb_show.php?i=3yv7uhqh2v" data-images='["https://files.fm/thumb_show.php?i=3yv7uhqh2v","https://files.fm/thumb_show.php?i=dj53jk5ypb","https://files.fm/thumb_show.php?i=5kqp7ueuy6","https://files.fm/thumb_show.php?i=b4z42tdn67"]' alt="SMP World 1" class="expandable-img">
                        <span class="expand-text">Expand Image</span>
                        </div>
                        <h3>SMP World 3</h3>
                        <p>Latest Backup: 2023<br>
                            Version: 1.19.4 Vanila<br>
                            World Size: 1.56Gb
                        </p>
                        <button class="btn2 toggle-description">Full Description</button>
                        <div class="full-description">
                            <p>Last seen online: Unknow <br>
                                Cause: World was lost durring a pc format <br>
                                Cords for the base 1: 1530, 106, 37 <br>
                                Cords for the base 2: 867, 91, -331 <br>
                                Cords for the base 3: -1749, 124, 154 <br>
                                Cords for the base 4: 4004, 92, 944 <br>
                            </p>
                        </div>
                        <a href="https://mega.nz/file/ARA0kQgJ#iV1KKuxTlg-ljEzz8Y1Mdi7qMo6A5D7JREXm6vklqOM" target="_blank" class="btn3" id="load-button">Download</a>
                    </div>
`,`<div class="world">
                        <div class="image-container">
                        <img src="https://files.fm/thumb_show.php?i=zc7vv8pcgw" data-images='["https://files.fm/thumb_show.php?i=zc7vv8pcgw","https://files.fm/thumb_show.php?i=mbf39wgeb4"]' alt="SMP World 1" class="expandable-img">
                        <span class="expand-text">Expand Image</span>
                        </div>
                        <h3>SMP World 4</h3>
                        <p>Latest Backup: 4/10/2024<br>
                            Version: 1.21.1 Fabric<br>
                            World Size: 5.23Gb
                        </p>
                        <button class="btn2 toggle-description">Full Description</button>
                        <div class="full-description">
                            <p>Cause: World was annihilated <br>
                                Cords for the base: -1200, 147, 95 <br>
                                Mods Used: <a class="links-btn" target="_blank" href="https://rb.gy/gei1fy"><span id="span2" style="color: rgb(20, 222, 248);">Download</span></a><br>
                                (Some mods are shared with SMP World 4 but still work)
                            </p>
                        </div>
                        <a href="https://mega.nz/file/pNwUSLgZ#9tI6NJkB3CKKSZyumNVfKG6ZJ0ga85b9mNb-m6MjIrc" target="_blank" class="btn3" id="load-button">Download</a>
                    </div>
`,`<div class="world">
                        <div class="image-container">
                        <img src="https://files.fm/thumb_show.php?i=xaj2dv2q2d" data-images='["https://files.fm/thumb_show.php?i=xaj2dv2q2d","https://files.fm/thumb_show.php?i=r29enznzgy"]' alt="SMP World 1" class="expandable-img">
                        <span class="expand-text">Expand Image</span>
                        </div>
                        <h3>SMP World 5</h3>
                        <p>Latest Backup: 26/10/2024<br>
                            Version: 1.21.1 Fabric<br>
                            World Size: 5.64Gb
                        </p>
                        <button class="btn2 toggle-description">Full Description</button>
                        <div class="full-description">
                            <p>Last seen online: 26/10/24 <br>
                                Cause: Community lost interest and abandoned <br>
                                Cords for the base: -1200, 147, 95 <br>
                                Mods Used: <a class="links-btn" target="_blank" href="https://rb.gy/7rzu1c"><span id="span2" style="color: rgb(20, 222, 248);">Download</span></a>
                            </p>
                        </div>
                        <a href="https://mega.nz/file/MMJUxABQ#-KQ5YAEhKo_l-OXzxKUYzfdLhA6epKlSoSoOJvCSsbw" target="_blank" class="btn3" id="load-button">Download</a>
                    </div>
`,`<div class="world">
                        <div class="image-container">
                        <img src="https://files.fm/thumb_show.php?i=36nzaxb8da" data-images='["https://files.fm/thumb_show.php?i=36nzaxb8da","https://files.fm/thumb_show.php?i=mubbuc5uex","https://files.fm/thumb_show.php?i=6pq2szgndz","https://files.fm/thumb_show.php?i=t639sr5r2d",
                        "https://files.fm/thumb_show.php?i=ay3p5zfxgh","https://files.fm/thumb_show.php?i=gs8n2u94gn","https://files.fm/thumb_show.php?i=8mae4v7qty","https://files.fm/thumb_show.php?i=nbdu3y9k4x","https://files.fm/thumb_show.php?i=9hqk39barz","https://files.fm/thumb_show.php?i=vy6krwdd3x",
                        "https://files.fm/thumb_show.php?i=bwxep78h2s","https://files.fm/thumb_show.php?i=be39asq5c2","https://files.fm/thumb_show.php?i=2ea2kgz39t","https://files.fm/thumb_show.php?i=hehj23juhj","https://files.fm/thumb_show.php?i=5hjnc5r8qx","https://files.fm/thumb_show.php?i=73pdbrttsb"]' alt="SMP World 1" class="expandable-img">
                        <span class="expand-text">Expand Image</span>
                        </div>
                        <h3>SMP World 6</h3>
                        <p>Latest Backup: 16/1/23<br>
                            Version: 1.19.3 Vanilla<br>
                            World Size: 707Mb
                        </p>
                        <button class="btn2 toggle-description">Full Description</button>
                        <div class="full-description">
                            <p>Last seen online: 16/1/23 <br>
                                Cause: World was lost due to not backed up before formating the pc <br>
                                Cords for the base: 479, 197, -86 <br>
                                Mods Used: Vanilla
                            </p>
                        </div>
                        <a href="https://mega.nz/file/ENAmnDaB#-0S7d1jwhQ9qRgvgqxR-odmBc0gUo_hDG1Tj_RVkAEk" target="_blank" class="btn3" id="load-button">Download</a>
                    </div>`
    ];

    let index = 0;

    function attachEventListeners() {
        // Ensure we remove existing event listeners before adding new ones
        document.querySelectorAll(".toggle-description").forEach(button => {
            button.removeEventListener("click", toggleDescription);
            button.addEventListener("click", toggleDescription);
        });

        document.querySelectorAll(".expandable-img").forEach(img => {
            img.removeEventListener("click", openImageOverlay);
            img.addEventListener("click", openImageOverlay);
        });
    }

    function toggleDescription(event) {
        event.target.parentElement.classList.toggle("show-description");
    }

    function openImageOverlay(event) {
        const imgOverlay = document.getElementById("overlay-popup-image");
        const expandedImg = document.getElementById("expandedImg");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const loader = document.createElement('div'); // Create loader dynamically

        loader.classList.add('loading-spinner');
        imgOverlay.appendChild(loader); // Add loader to the overlay

        let imgArray = JSON.parse(event.target.getAttribute("data-images"));
        let currentIndex = imgArray.indexOf(event.target.src);

        function updateImage() {
            expandedImg.src = imgArray[currentIndex];
        }

        // Remove old event listeners to prevent duplicate bindings
        prevBtn.replaceWith(prevBtn.cloneNode(true));
        nextBtn.replaceWith(nextBtn.cloneNode(true));

        // Re-select buttons since we replaced them
        const newPrevBtn = document.getElementById("prevBtn");
        const newNextBtn = document.getElementById("nextBtn");

        newNextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % imgArray.length;
            updateImage();
        });

        newPrevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
            updateImage();
        });

        imgOverlay.classList.add("show");
        updateImage();

        imgOverlay.addEventListener("click", function (event) {
            if (event.target === imgOverlay) {
                imgOverlay.classList.remove("show");
            }
        });

        // Function to update displayed image with smooth transition
        function updateImage() {
            expandedImg.classList.add("blurred"); // Apply blur effect while loading
            loader.style.display = "block"; // Show loader

            const newImg = new Image();
            newImg.src = imgArray[currentIndex];

            newImg.onload = function () {
                expandedImg.src = newImg.src; // Switch image only when fully loaded
                expandedImg.classList.remove("blurred"); // Remove blur
                loader.style.display = "none"; // Hide loader
            };
        }
    }

    function loadNextWorld() {
        if (index < worlds.length) {
            worldsContainer.insertAdjacentHTML("beforeend", worlds[index]);
            index++;

            attachEventListeners(); // Attach event listeners each time a world is added

            if (index < worlds.length) {
                setTimeout(loadNextWorld, 750);
            } else {
                setTimeout(() => {
                    worldLoader.classList.add("hidden");
                    blurOverlay.classList.add("hidden");

                    setTimeout(() => {
                        worldLoader.style.display = "none";
                        blurOverlay.style.display = "none";
                    }, 750);
                }, 3000);
            }
        }
    }

    // Load the first world immediately
    worldsContainer.insertAdjacentHTML("beforeend", worlds[index]);
    index++;
    attachEventListeners(); // Attach event listeners after the first world is added

    setTimeout(loadNextWorld, 4500);
});
