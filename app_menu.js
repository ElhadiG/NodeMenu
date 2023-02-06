const express = require('express');
const fs = require('fs');
const app = express();
//je fait une requete d'apres la route de ma data_menu Json 
app.get('/data_menu',(request, response)=>{
    fs.readFile('data_menu.json',(err, data)=>{  // la librairie fs permet de lire le fichier data_menu.json grace a la methode readFile avec comme param err et data
        //si la requete a echoue on renvoie le statut 500 (erreur de serveur interne) avec le message d'erreur
        if(err){
            response.status(500).json({
                message:"Une erreur lors de la lecture des données ",
                error: err
            });
        //si la requete a reussi a lire le fichier 
        } else{
            //on renvoie le statut 200 (ok) avec le contenu du fichier qui a été analyser et construit par JSON parse
            response.status(200).json(JSON.parse(data));
            console.table(JSON.parse(data).data) //pour afficher le fichier en tableau sur la console 
        }
    })
})

//on attribue un port à la requete
app.listen(8000, ()=> {
    console.log ("l'application tourne sur le port 8000")
})