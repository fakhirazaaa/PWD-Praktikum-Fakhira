<?php
require 'objek.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $sk = new samakaki();
    $sk -> setTinggi(10);
    $sk -> setAlas(5);
    $sk -> setSisi(6);
    echo "<h3>segitiiga sm kaki</h3>";
    $sk -> tampilkanNilai();
    echo "Luas : ", $sk -> luas(), "<br>";
    echo "Keliling : ", $sk -> keliling(), "<br><br>";

    $ss = new sikuSiku();
    $ss -> setTinggi(4);
    $ss -> setAlas(3);
    $ss -> setSisi(5);
    echo "<h3>segitiga siiku siku</h3>";
    $ss -> tampilkanNilai();
    echo "Luas : ", $ss -> luas(), "<br>";
    echo "Keliling : ", $ss -> keliling(), "<br><br>";

    $sm = new samaSisi();
    $sm -> setTinggi(5);
    $sm -> setAlas(6);
    $sm -> setSisi(6);
    echo "<h3>sgiga sm sisi</h3>";
    $sm -> tampilkanNilai();
    echo "Luas : ", $sm -> luas(), "<br>";
    echo "Keliling : ", $sm -> keliling(), "<br>";
    ?>
</body>
</html>