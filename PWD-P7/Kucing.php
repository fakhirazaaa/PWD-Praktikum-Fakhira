<?php
require_once "Hewan.php";

class Kucing extends Hewan {
    private $jenis = "Kucing";

    function getJenis() {
        return $this->jenis;
    }

    function getSuara() {
        return "Meong";
    }
}
?>