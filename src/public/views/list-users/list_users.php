<!DOCTYPE html>
<html lang="pt-br">
<head>
    
    <title>List Users</title>
    <?php
        require_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/header_standard.php';
    ?>
</head>
<body>
    <div class="container">

        <div class="row mt-5">
            <div class="col">
                <?php
                    include_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/msg.php';
                 ?>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Lista de Usuários Cadastrados</h5>
                        <p class="card-text">Todos os Usuários Cadastrados Podem ser Listados Aqui em Ordem Alfabética.</p>
                    </div>
                    <div class="card-footer">
                        <button id="btn-list" class="btn btn-primary" type="button">LISTAR</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col">
                <table class="table table-striped table-inverse table-responsive table">
                    <thead class="thead-inverse">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody id="body-table">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/partiels/doctype_bootstrap.php';
?>
<script type="module" src="/src/public/js/fetch_controller_select_user.js"></script>
</html>