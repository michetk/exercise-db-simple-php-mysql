<!DOCTYPE html>
<html lang="pt-br">
<head>

    <title>Query MySql</title>

    <?php
        include_once './src/views/partiels/header-standard.php'
    ?>

    <link rel="stylesheet" href="./src/public/css/style.css">

</head>
<body>
    
    <div class="container mt-4">
    
        <div class="row d-flex justify-content-center">
            <div class="col col-6">
                <form id="form-register" method="POST">
                    <div class="form-group">
                        <input type="name" name="name" id="name" class="form-control" placeholder="seu nome aqui">
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" id="email" class="form-control" placeholder="seu email aqui">
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" id="password" class="form-control" placeholder="sua senha">
                    </div>
                    <div class="form-group">
                        <input type="password" name="password-confirm" id="password-confirm" class="form-control" placeholder="confirme a senha">
                        <p id="danger-msg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <button type="submit" id="btn-register" class="btn btn-success">Registrar</button>
                </form>
            </div>
        </div>
    </div>
    

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="./src/public/bootstrap/js/bootstrap.min.js"></script>
<script src="./src/public/js/fetch_controller.js"></script>
</html>