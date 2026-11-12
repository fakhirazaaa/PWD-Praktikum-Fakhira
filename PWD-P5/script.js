$(document).ready(function() {

    let products = [
        {id: 1, nama: "Pink Bag", harga: 85000, stok: 5, gambar: "tas pink.jpeg"},
        {id: 2, nama: "Cute Shoes", harga: 700000, stok: 4, gambar: "sepatu pink.jpeg"},
        {id: 3, nama: "Lip Tint", harga: 45000, stok: 6, gambar: "lipstick.jpeg"},
        {id: 4, nama: "Teddy Bear", harga: 75000, stok: 3, gambar: "teddy bear.jpeg"},
        {id: 5, nama: "Pink Watch", harga: 95000, stok: 5, gambar: "pink watch.jpeg"},
        {id: 6, nama: "Flower Bouquet", harga: 65000, stok: 4, gambar: "buket bunga.jpeg"}
    ];

    let cart = [];

    // mnampilkan produk
    function showProducts() {
        let productList = document.getElementById("product-list");
        productList.innerHTML = "";

        products.forEach(function(product) {
            let card = document.createElement("div");
            card.className = "product-card";

            let gambar = document.createElement("img");
            gambar.src = product.gambar;
            gambar.className = "product-image";
            gambar.alt = product.nama;

            let nama = document.createElement("h3");
            nama.appendChild(document.createTextNode(product.nama));

            let harga = document.createElement("p");
            harga.className = "price";
            harga.appendChild(document.createTextNode(
                "Rp " + product.harga.toLocaleString("id-ID")
            ));

            let stok = document.createElement("p");
            stok.className = "stock";
            stok.appendChild(document.createTextNode("Stok: " + product.stok));

            let button = document.createElement("button");
            button.className = "add-btn";
            button.appendChild(document.createTextNode("Tambah ke Keranjang"));

            button.onclick = function() {
                addToCart(product.id);
            };

            card.appendChild(gambar);
            card.appendChild(nama);
            card.appendChild(harga);
            card.appendChild(stok);
            card.appendChild(button);

            productList.appendChild(card);
        });
    }

    // mnambahkan produk ke keranjang
    function addToCart(id) {
        let product = products.find(p => p.id === id);

        if (product.stok <= 0) {
            alert("Stok produk habis!");
            return;
        }

        let existing = cart.find(item => item.id === id);

        if (existing) {
            existing.jumlah++;
        } else {
            cart.push({
                id: product.id,
                nama: product.nama,
                harga: product.harga,
                jumlah: 1
            });
        }

        product.stok--;

        showProducts();
        updateCart();

        $("#cart-list").fadeIn(400);
    }

    // mmperbarui keranjang
    function updateCart() {
        $("#cart-list").empty();

        let totalItems = 0;
        let totalPrice = 0;

        if (cart.length === 0) {
            $("#cart-list").append("<p>Keranjang masih kosong.</p>");
        }

        cart.forEach(function(item) {
            totalItems += item.jumlah;
            totalPrice += item.harga * item.jumlah;

            let cartItem = $(`
                <div class="cart-item">
                    <div>
                        <strong>${item.nama}</strong><br>
                        ${item.jumlah} x Rp ${item.harga.toLocaleString("id-ID")}
                    </div>
                    <button class="remove-btn" data-id="${item.id}">
                        Hapus
                    </button>
                </div>
            `);

            $("#cart-list").append(cartItem);
        });

        $("#cart-count").text(totalItems);
        $("#total-items").text(totalItems);
        $("#total-price").text(totalPrice.toLocaleString("id-ID"));
    }

    // hpus produk
    $("#cart-list").on("click", ".remove-btn", function() {
        let id = Number($(this).data("id"));

        if (!confirm("Yakin ingin menghapus produk ini?")) {
            return;
        }

        let item = cart.find(p => p.id === id);
        let product = products.find(p => p.id === id);

        product.stok += item.jumlah;

        $(this).closest(".cart-item").fadeOut(300, function() {
            $(this).remove();

            cart = cart.filter(p => p.id !== id);

            updateCart();
            showProducts();
        });
    });

    // mengosongkan keranjang
    $("#clear-cart").click(function() {
        if (cart.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        if (confirm("Yakin ingin mengosongkan keranjang?")) {
            cart.forEach(function(item) {
                let product = products.find(p => p.id === item.id);
                product.stok += item.jumlah;
            });

            $("#cart-list").fadeOut(300, function() {
                cart = [];
                updateCart();
                showProducts();
                $(this).fadeIn(300);
            });

            $("#checkout-result").empty();
        }
    });

    // membuka dan menutup keranjang
    $("#cart-toggle").click(function() {
        $("#cart-panel").slideToggle(400);
    });

    // mencari produk
    $("#search").on("keyup", function() {
        let keyword = $(this).val().toLowerCase();

        $("#product-list .product-card").each(function() {
            let nama = $(this).find("h3").text().toLowerCase();

            $(this).toggle(nama.includes(keyword));
        });
    });

    // checkout
    $("#checkout").click(function() {
        if (cart.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        let namaPembeli = prompt("Masukkan nama pembeli:");

        if (namaPembeli === null) return;

        if (namaPembeli.trim() === "") {
            alert("Nama pembeli tidak boleh kosong!");
            return;
        }

        let total = 0;
        let jumlah = 0;

        let daftar = $("<div>");

        cart.forEach(function(item) {
            let subtotal = item.harga * item.jumlah;

            total += subtotal;
            jumlah += item.jumlah;

            daftar.append(
                $("<p>").text(
                    item.nama + " (" + item.jumlah + "x) - Rp " +
                    subtotal.toLocaleString("id-ID")
                )
            );
        });

        $("#checkout-result").empty();

        $("#checkout-result").append(
            $("<h3>").text("Pesanan Berhasil!")
        );

        $("#checkout-result").append(
            $("<p>").text("Nama Pembeli: " + namaPembeli)
        );

        $("#checkout-result").append(
            $("<h4>").text("Daftar Pesanan:")
        );

        $("#checkout-result").append(daftar);

        $("#checkout-result").append(
            $("<p>").text("Jumlah Item: " + jumlah)
        );

        $("#checkout-result").append(
            $("<h3>").text(
                "Total Pembayaran: Rp " + total.toLocaleString("id-ID")
            )
        );

        $("#checkout-result").append(
            $("<p>").text("Terima kasih sudah berbelanja di PinkMart.")
        );

        $("#checkout-result").fadeIn(500);

        cart = [];
        updateCart();
    });

    showProducts();
    updateCart();

});