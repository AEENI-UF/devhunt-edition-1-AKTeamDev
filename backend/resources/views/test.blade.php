<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>juste Teste</title>
</head>
<body>
           <form action="/api/devhunt/utilisateurs" method="POST">
                {{csrf_field()}}
                <input type="text" name="super_user"><br>
                <input type="text" name=" super_mdp"><br>
                <input type="text" name="confirmer_super_mdp">
                 <!-- <input type="text" name="mot_de_passe"><br>
                <input type="text" name="confirmer_mot_de_passe"><br> -->
                <input type="submit">
            </form>            
            
            <!--<form action="/api/devhunt/update_utilisateurs" method="POST">
                {{csrf_field()}}
                <input type="text" name="id"><br>
                <input type="text" name="super_user"><br>
                <input type="text" name=" super_mdp"><br>
                <input type="text" name="confirmer_super_mdp">
                <input type="text" name="mot_de_passe"><br>
                <input type="text" name="confirmer_mot_de_passe"><br>
                <input type="submit">
            </form>-->

<br><br>
            <!--           ========================================           -->
            <div class="modal" id="modal-exim" tabindex="1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <form action="/importation_fichiers" method="POST" enctype="multipart/form-data">

        {{csrf_field()}}
            
                

                

            </form>
        </div>
    </div>

</div>

</body>
</html>