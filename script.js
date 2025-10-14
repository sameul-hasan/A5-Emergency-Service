

function getelement(id){
    const element = document.getElementById(id);
    return element;
}

function getelementC(className){
    const element = document.getElementsByClassName(className);
    return element;
}

const heart = getelement("heart");
const hearts = getelementC("fa-heart");

for(const like of hearts){
    like.addEventListener("click", function() {
        heart.innerText = Number(heart.innerText) + 1;
    });
}

const copyButtons = getelementC("c-button");
const copy = getelement("copy");

for(const cb of copyButtons){
    cb.addEventListener("click", function() {
        const phoneNumber = cb.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(phoneNumber);
        copy.innerText = Number(copy.innerText) + 1;
        alert("increase the copy count " + copy.innerText + " and copied " + phoneNumber);
    });
}

const callButtons = getelementC("call-btn");
const historyDiv = getelement("history-div");
let coin = getelement("coinCount");
const Clear = getelement("clear");
const time = new Date();


Clear.addEventListener("click", function() {
    historyDiv.innerHTML = "";
});

getelement("Cards").addEventListener("click", function (e){
    if(e.target.className.includes("call-btn")){
        if(coin.innerText < 20){
            alert("You don't have enough coins");
            return;
        }
        else if(coin.innerText >= 20){
        coin.innerText = parseInt(coin.innerText) - 20 ;
        const service = e.target.parentNode.parentNode.children[1].children[0].innerText;
        const Number = e.target.parentNode.parentNode.children[2].children[0].innerText;
        const CurrentTime = time.getHours() + ":" + time.getMinutes() + ":"+ time.getSeconds() + " " + (time.getHours() >= 12 ? 'PM' : 'AM');
        alert("Calling " + service + " " + Number + " at " + CurrentTime);
        
        const CreateDiv = document.createElement("div");
        CreateDiv.innerHTML = `
                    <div class="bg-[#FAFAFA] p-4 flex justify-between items-center border-gray-200 rounded-lg">
                        <div class="w-[65%]">
                            <h1 class="font-semibold" >${service}</h1>
                            <p class="text-[Gray]">${Number}</p>
                        </div>
                        <div>
                            <p>${CurrentTime}</p>
                        </div>
                    </div>
                    `;
        historyDiv.append(CreateDiv);
        
       
        }
    }
    
})