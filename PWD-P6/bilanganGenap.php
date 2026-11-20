<?php
echo "<h3>bil genap 1 smpe 10</h3>";

for ($i = 1; $i <= 10; $i++):
    if ($i % 2 == 0):
        echo "<li>" . $i . " " . "</li>";
    endif;
endfor;

?>