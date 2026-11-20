<?php
$batas = 10;
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tabel Perkalian Matrik</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<table>
    <thead>
        <tr>
            <th class="judul">bilangan</th>
            <?php 
                for ($j = 1; $j <= $batas; $j++): 
            ?>
                <th class="hijau"><?= $j; ?></th>
            <?php 
                endfor; 
            ?>
        </tr>
    </thead>
    <tbody>
        <?php 
            for ($i = 1; $i <= $batas; $i++): 
        ?>
            <tr>
                <th class="hijau"><?= $i; ?></th>
                <?php 
                    for ($j = 1; $j <= $batas; $j++): 
                ?>
                    <?php
                        $hasil = $i * $j;
                        $kelasWarna = ($hasil % 2 == 1) ? 'kuning' : 'biru';
                    ?>
                    <td class="<?= $kelasWarna; ?>"><?= $hasil; ?></td>
                <?php 
                    endfor; 
                ?>
            </tr>
        <?php 
            endfor; 
        ?>
    </tbody>
</table>

</body>
</html>