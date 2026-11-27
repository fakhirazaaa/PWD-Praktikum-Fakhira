<?php
class Hewan {
    private $nama = "";
    private $umur = 0;

    function setNama($nama) {
        $this->nama = $nama;
    }

    function getNama() {
        return $this->nama;
    }

    function setUmur($umur) {
        $this->umur = $umur;
    }

    function getUmur() {
        return $this->umur;
    }
}
?>