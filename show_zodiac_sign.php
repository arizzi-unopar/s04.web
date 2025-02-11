<?php
include('layouts/header.php');

$dataNascimento = $_POST['dataNascimento'];
$signos = simplexml_load_file("signos.xml");

// Format input date to match XML format
$dataFormatada = date("d/m", strtotime($dataNascimento));

$signoEncontrado = null;

// Iterate over signs to find the matching range
foreach ($signos->signo as $signo) {
    if ($dataFormatada >= $signo->dataInicio && $dataFormatada <= $signo->dataFim) {
        $signoEncontrado = $signo;
        break;
    }
}

if ($signoEncontrado) {
    echo "<h1>Seu Signo: {$signoEncontrado->signoNome}</h1>";
    echo "<p>{$signoEncontrado->descricao}</p>";
} else {
    echo "<p>Não foi possível determinar seu signo.</p>";
}
?>
</div>
</body>
</html>
