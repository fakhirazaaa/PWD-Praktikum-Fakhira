<?php
require_once "Kucing.php";
require_once "Anjing.php";

$kucing1 = new Kucing();
$kucing1->setNama("Mochi");
$kucing1->setUmur(2);

$anjing1 = new Anjing();
$anjing1->setNama(" Milo");
$anjing1->setUmur(3);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Hewan</title>
</head>
<body>
    <h2>Data Hewan</h2>

    <p>
        Nama: <?php echo $kucing1->getNama(); ?><br>
        Umur: <?php echo $kucing1->getUmur(); ?> tahun<br>
        Jenis: <?php echo $kucing1->getJenis(); ?><br>
        Suara: <?php echo $kucing1->getSuara(); ?>
    </p>

    <hr>

    <p>
        Nama: <?php echo trim($anjing1->getNama()); ?><br>
        Umur: <?php echo $anjing1->getUmur(); ?> tahun<br>
        Jenis: <?php echo $anjing1->getJenis(); ?><br>
        Suara: <?php echo $anjing1->getSuara(); ?>
    </p>
</body>
</html>