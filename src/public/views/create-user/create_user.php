<!DOCTYPE html>
<html lang="pt-br">
<head>

    <title>Query MySql</title>

    <?php
        include_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/header_standard.php';
    ?>

</head>
<body>

    <div class="container mt-4">

        <?php
            require $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/msg.php';
        ?>
    
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
<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/doctype_bootstrap.php';
?>
<script type="module" src="/src/public/js/fetch_controller_register_user.js"></script>
</html>