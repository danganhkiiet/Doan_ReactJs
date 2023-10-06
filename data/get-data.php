<?php

header('Content-type: application/json; charset=urf-8');
header('Access-Control-Allow-Origin: *');

 $dsLoaiSanPham = [
  [
    'ten'=>'Điện Thoại',
    'dsSanPham'=>[
      [
        'ten'=>'Oppo Zeno 2',
        'gia'=>'15.000.000'
      ],
      [
        'ten'=>'Iphone 15',
        'gia'=>'20.000.000'
      ],
      [
        'ten'=>'Samsung Zflip 2',
        'gia'=>'30.000.000'
      ]
    ]
  ],
  [
    'ten'=>'Laptop',
    'dsSanPham'=>[
      [
        'ten'=>'Dell inspiron 15',
        'gia'=>'17.000.000'
      ],
      [
        'ten'=>'Dell latitude',
        'gia'=>'20.000.000'
      ],
      [
        'ten'=>'Nitro 5',
        'gia'=>'30.000.000'
      ]
    ]
  ]
      ];

echo json_encode($dsLoaiSanPham);
