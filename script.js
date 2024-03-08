function handleSubmit(event) {
    event.preventDefault();
    
    // Récupérer les valeurs des champs
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var message = document.getElementById("message").value;
    console.log("valeur Prénom :", firstName);//verification
    console.log("valeur Nom :", lastName);//verification

    // Vérifier si tous les champs sont remplis
    if (firstName !== "" && lastName !== "" && message !== "") {
      // Cacher le message d'erreur
      document.getElementById("error-message").style.display = "none";

      // Ajouter un nouveau commentaire
      var commentList = document.getElementById("comment-list");
      var newComment = document.createElement("div");
      newComment.className = "flex space-x-4 text-sm text-gray-500";
      //On change juste Bordure border-t par border-b 
      newComment.innerHTML = `
        <div class="flex-1 py-10 border-b border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
      commentList.insertBefore(newComment, commentList.firstChild);

      // Réinitialiser les champs du formulaire
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("message").value = "";
    } else {
      // Afficher le message d'erreur si les champs ne sont pas remplis
      document.getElementById("error-message").style.display = "block";
    }

    return false;
  }