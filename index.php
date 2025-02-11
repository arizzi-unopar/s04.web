<?php include('layouts/header.php'); ?>
<h1>Descubra Seu Signo</h1>
<form method="POST" action="show_zodiac_sign.php">
    <div class="mb-3">
        <label for="dataNascimento" class="form-label">Data de Nascimento:</label>
        <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" required>
    </div>
    <button type="submit" class="btn btn-primary">Consultar</button>
</form>
</div>
</body>
</html>
