<?php

class Segitiga{
    public $tinggi = 0;
    public $alas = 0;
    public $sisi = 0;

    function setTinggi($t){
        $this -> tinggi = $t;
    }

    function setAlas($a){
        $this -> alas = $a;
    }

    function setSisi($s){
        $this -> sisi = $s;
    }

    function getTinggi(){
        return $this -> tinggi;
    }

    function getAlas(){
        return $this -> alas;
    }

    function getSisi(){
        return $this -> sisi;
    }

    function tampilkanNilai(){
        echo "Tinggi : ", $this -> getTinggi(), "<br>";
        echo "Alas : ", $this -> getAlas(), "<br>";
        echo "Sisi : ", $this -> getSisi(), "<br>";
    }
}

class samakaki extends Segitiga{
    function luas(){
        return 0.5 * $this -> getAlas() * $this -> getTinggi();
    }

    function keliling(){
        return $this -> getAlas() + (2 * $this -> getSisi());
    }
}

class sikuSiku extends Segitiga{
    function luas(){
        return 0.5 * $this -> getAlas() * $this -> getTinggi();
    }

    function keliling(){
        $miring = (($this -> getAlas() * $this -> getAlas()) + ($this -> getTinggi() * $this -> getTinggi())) ** 0.5;
        return $this -> getAlas() + $this -> getTinggi() + $miring;
    }
}

class samaSisi extends Segitiga{
    function luas(){
        return 0.5 * $this -> getAlas() * $this -> getTinggi();
    }

    function keliling(){
        return 3 * $this -> getSisi();
    }
}

?>