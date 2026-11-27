<?php
require_once "Hewan.php";

class Anjing extends Hewan {
    private $jenis = "Anjing";

    function getJenis() {
        return $this->jenis;
    }

    function getSuara() {
        return "Guk guk";
    }
}
?>