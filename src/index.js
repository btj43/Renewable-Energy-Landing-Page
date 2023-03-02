function giveTips() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    let livingSituation = prompt("Do you own your own home? (Yes/No)");
    alert(
      "Thank you " +
        name +
        " please see below for tips based on your living situation! An email with even more tips will be sent out to you."
    );

    if (livingSituation === "Yes" || livingSituation === "yes") {
      let updatedInfo = document.querySelector(".tipsinfo");
      updatedInfo.innerHTML =
        "Top tips for home owners: <br/> Putting solar panels on your home. <br/> Change away from a gas boiler. <br/> Look into how to invest into green projects.";
    } else {
      let updatedInfo = document.querySelector(".tipsinfo");
      updatedInfo.innerHTML =
        "Top tips for non-home owners: <br/> Sign up to get your energy from a renewable energy provider. <br/> Look into community renewable assets or schemes such as 'Ripple'. <br/> Look into how to invest into green projects.";
    }
  }

  let tipsButton = document.querySelector("button");
  tipsButton.addEventListener("click", giveTips);
