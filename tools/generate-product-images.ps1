$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "assets\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Save-Svg($Name, $Svg) {
  $Path = Join-Path $outDir $Name
  Set-Content -Path $Path -Value $Svg -Encoding UTF8
}

function Bg($W, $H, $Title, $SubTitle) {
  $titleText = ""
  if ($Title -ne "") {
    $titleText = "<text x='70' y='118' fill='#fff' font-family='Microsoft YaHei, Arial' font-size='58' font-weight='900'>$Title</text>"
  }
  $subText = ""
  if ($SubTitle -ne "") {
    $subText = "<text x='74' y='166' fill='#e6e6e6' font-family='Microsoft YaHei, Arial' font-size='25' font-weight='600'>$SubTitle</text>"
  }

@"
<defs>
  <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#111'/>
    <stop offset='.55' stop-color='#242424'/>
    <stop offset='1' stop-color='#3a1114'/>
  </linearGradient>
  <linearGradient id='red' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#f0373e'/>
    <stop offset='1' stop-color='#a70f15'/>
  </linearGradient>
  <filter id='shadow' x='-20%' y='-20%' width='140%' height='150%'>
    <feDropShadow dx='0' dy='18' stdDeviation='18' flood-color='#000' flood-opacity='.45'/>
  </filter>
  <pattern id='grid' width='86' height='70' patternUnits='userSpaceOnUse' patternTransform='skewX(-18)'>
    <path d='M 86 0 L 0 0 0 70' fill='none' stroke='#333' stroke-width='1' opacity='.55'/>
  </pattern>
</defs>
<rect width='$W' height='$H' fill='url(#bg)'/>
<rect width='$W' height='$H' fill='url(#grid)' opacity='.55'/>
<polygon points='$($W*.72),0 $W,0 $W,$H $($W*.58),$H' fill='#d71920' opacity='.72'/>
<rect y='$($H*.76)' width='$W' height='$($H*.24)' fill='#050505' opacity='.72'/>
$titleText
$subText
"@
}

function Welder($X, $Y, $S, $Model, $Type, $Variant) {
  $Mig = ""
  if ($Variant -eq "mig") {
    $Mig = @"
<g>
  <rect x='$($X+510*$S)' y='$($Y+92*$S)' width='$($S*150)' height='$($S*112)' rx='$($S*12)' fill='#141414' filter='url(#shadow)'/>
  <rect x='$($X+526*$S)' y='$($Y+112*$S)' width='$($S*118)' height='$($S*70)' rx='$($S*7)' fill='url(#red)'/>
  <text x='$($X+550*$S)' y='$($Y+154*$S)' fill='#fff' font-size='$($S*18)' font-family='Microsoft YaHei' font-weight='900'>&#x9001;&#x4E1D;&#x673A;</text>
  <path d='M $($X+170*$S) $($Y+205*$S) C $($X+340*$S) $($Y+350*$S), $($X+520*$S) $($Y+320*$S), $($X+660*$S) $($Y+250*$S)' fill='none' stroke='#080808' stroke-width='$($S*10)' stroke-linecap='round'/>
</g>
"@
  }
  $Tig = ""
  if ($Variant -eq "tig") {
    $Tig = @"
<g>
  <path d='M $($X+170*$S) $($Y+205*$S) C $($X+330*$S) $($Y+330*$S), $($X+450*$S) $($Y+315*$S), $($X+545*$S) $($Y+246*$S) L $($X+625*$S) $($Y+216*$S)' fill='none' stroke='#080808' stroke-width='$($S*9)' stroke-linecap='round'/>
  <g stroke='#f5b43a' stroke-width='$($S*3)' stroke-linecap='round'>
    <path d='M $($X+628*$S) $($Y+215*$S) L $($X+704*$S) $($Y+186*$S)'/>
    <path d='M $($X+628*$S) $($Y+215*$S) L $($X+718*$S) $($Y+218*$S)'/>
    <path d='M $($X+628*$S) $($Y+215*$S) L $($X+690*$S) $($Y+246*$S)'/>
  </g>
</g>
"@
  }

@"
<g filter='url(#shadow)'>
  <ellipse cx='$($X+260*$S)' cy='$($Y+314*$S)' rx='$($S*245)' ry='$($S*25)' fill='#000' opacity='.52'/>
  <polygon points='$($X+80*$S),$($Y+28*$S) $($X+486*$S),$($Y+62*$S) $($X+486*$S),$($Y+286*$S) $($X+80*$S),$($Y+258*$S)' fill='#8d1015'/>
  <rect x='$($X)' y='$($Y+10*$S)' width='$($S*430)' height='$($S*260)' rx='$($S*16)' fill='url(#red)'/>
  <rect x='$($X+42*$S)' y='$($Y+50*$S)' width='$($S*160)' height='$($S*178)' rx='$($S*10)' fill='#1f1f1f'/>
  <rect x='$($X+62*$S)' y='$($Y+72*$S)' width='$($S*120)' height='$($S*55)' rx='$($S*6)' fill='#303030'/>
  <circle cx='$($X+98*$S)' cy='$($Y+183*$S)' r='$($S*17)' fill='#cfd2d4'/><circle cx='$($X+98*$S)' cy='$($Y+183*$S)' r='$($S*9)' fill='#111'/>
  <circle cx='$($X+176*$S)' cy='$($Y+183*$S)' r='$($S*17)' fill='#cfd2d4'/><circle cx='$($X+176*$S)' cy='$($Y+183*$S)' r='$($S*9)' fill='#111'/>
  <path d='M $($X+248*$S) $($Y+72*$S) L $($X+384*$S) $($Y+80*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <path d='M $($X+248*$S) $($Y+94*$S) L $($X+384*$S) $($Y+102*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <path d='M $($X+248*$S) $($Y+116*$S) L $($X+384*$S) $($Y+124*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <path d='M $($X+248*$S) $($Y+138*$S) L $($X+384*$S) $($Y+146*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <path d='M $($X+248*$S) $($Y+160*$S) L $($X+384*$S) $($Y+168*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <path d='M $($X+248*$S) $($Y+182*$S) L $($X+384*$S) $($Y+190*$S)' stroke='#ff6870' stroke-width='$($S*3)'/>
  <rect x='$($X+132*$S)' y='$($Y-8*$S)' width='$($S*166)' height='$($S*30)' rx='$($S*14)' fill='#181818'/>
  <text x='$($X+238*$S)' y='$($Y+54*$S)' fill='#fff' font-size='$($S*31)' font-family='Microsoft YaHei' font-weight='900'>&#x4E1C;&#x5347;</text>
  <text x='$($X+242*$S)' y='$($Y+235*$S)' fill='#fff' font-size='$($S*26)' font-family='Arial' font-weight='900'>$Model</text>
  <text x='$($X+242*$S)' y='$($Y+260*$S)' fill='#eee' font-size='$($S*16)' font-family='Microsoft YaHei' font-weight='800'>$Type</text>
  $Mig
  $Tig
</g>
"@
}

function ProductSvg($Name, $Model, $Type, $Variant, $Caption) {
  $B = Bg 900 675 "" ""
  $W = Welder 118 174 1.18 $Model $Type $Variant
  $Svg = @"
<svg xmlns='http://www.w3.org/2000/svg' width='900' height='675' viewBox='0 0 900 675' role='img'>
$B
<rect x='54' y='48' width='184' height='44' rx='5' fill='#d71920'/>
<text x='80' y='77' fill='#fff' font-size='19' font-family='Microsoft YaHei' font-weight='900'>&#x539F;&#x521B;&#x5546;&#x54C1;&#x56FE;</text>
<text x='54' y='145' fill='#fff' font-size='44' font-family='Microsoft YaHei' font-weight='900'>&#x4E1C;&#x5347;&#x710A;&#x673A;</text>
<text x='58' y='184' fill='#ddd' font-size='23' font-family='Microsoft YaHei'>$Model &#x00B7; $Caption</text>
$W
<text x='58' y='582' fill='#fff' font-size='23' font-family='Microsoft YaHei' font-weight='800'>&#x676D;&#x5DDE;&#x5730;&#x533A;&#x6388;&#x6743;&#x7ECF;&#x9500;&#x5546;</text>
</svg>
"@
  Save-Svg $Name $Svg
}

function BannerSvg($Name, $Title, $SubTitle) {
  $B = Bg 1600 760 $Title $SubTitle
  $W1 = Welder 870 250 1.25 "ARC-250" "&#x7535;&#x710A;&#x673A;" "arc"
  $W2 = Welder 1120 300 .82 "MIG-270" "&#x6C14;&#x4FDD;&#x710A;&#x673A;" "mig"
  $Svg = @"
<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='760' viewBox='0 0 1600 760' role='img'>
$B
<text x='76' y='228' fill='#fff' font-size='28' font-family='Microsoft YaHei' font-weight='900'>&#x7535;&#x710A;&#x673A; &#x00B7; &#x6C14;&#x4FDD;&#x710A;&#x673A; &#x00B7; &#x6C29;&#x5F27;&#x710A;&#x673A; &#x00B7; &#x710A;&#x673A;&#x914D;&#x4EF6;</text>
$W1
$W2
</svg>
"@
  Save-Svg $Name $Svg
}

function MarketingSvg($Name, $Title, $SubTitle, $Icon) {
  $B = Bg 640 420 "" ""
  $W = Welder 104 246 .72 "DS" "WELDER" "arc"
  $Svg = @"
<svg xmlns='http://www.w3.org/2000/svg' width='640' height='420' viewBox='0 0 640 420' role='img'>
$B
<rect x='50' y='56' width='142' height='142' rx='16' fill='#d71920'/>
<text x='121' y='148' fill='#fff' text-anchor='middle' font-size='58' font-family='Microsoft YaHei' font-weight='900'>$Icon</text>
<text x='226' y='108' fill='#fff' font-size='34' font-family='Microsoft YaHei' font-weight='900'>$Title</text>
<text x='230' y='146' fill='#ddd' font-size='19' font-family='Microsoft YaHei'>$SubTitle</text>
$W
</svg>
"@
  Save-Svg $Name $Svg
}

function PartsSvg($Name) {
  $B = Bg 900 640 "" ""
  $Svg = @"
<svg xmlns='http://www.w3.org/2000/svg' width='900' height='640' viewBox='0 0 900 640' role='img'>
$B
<text x='58' y='110' fill='#fff' font-size='44' font-family='Microsoft YaHei' font-weight='900'>&#x710A;&#x673A;&#x914D;&#x4EF6;&#x5957;&#x88C5;</text>
<text x='62' y='150' fill='#ddd' font-size='23' font-family='Microsoft YaHei'>&#x710A;&#x67AA; &#x00B7; &#x7535;&#x7F06; &#x00B7; &#x9762;&#x7F69; &#x00B7; &#x710A;&#x4E1D;&#x710A;&#x6761;</text>
<rect x='110' y='240' width='150' height='120' rx='12' fill='#151515' filter='url(#shadow)'/><rect x='138' y='256' width='94' height='54' rx='8' fill='#d71920'/><text x='185' y='340' fill='#fff' text-anchor='middle' font-size='22' font-family='Microsoft YaHei' font-weight='900'>&#x710A;&#x67AA;</text>
<rect x='330' y='240' width='150' height='120' rx='12' fill='#151515' filter='url(#shadow)'/><rect x='358' y='256' width='94' height='54' rx='8' fill='#d71920'/><text x='405' y='340' fill='#fff' text-anchor='middle' font-size='22' font-family='Microsoft YaHei' font-weight='900'>&#x7535;&#x7F06;</text>
<rect x='550' y='240' width='150' height='120' rx='12' fill='#151515' filter='url(#shadow)'/><rect x='578' y='256' width='94' height='54' rx='8' fill='#d71920'/><text x='625' y='340' fill='#fff' text-anchor='middle' font-size='22' font-family='Microsoft YaHei' font-weight='900'>&#x9762;&#x7F69;</text>
<rect x='220' y='420' width='150' height='120' rx='12' fill='#151515' filter='url(#shadow)'/><rect x='248' y='436' width='94' height='54' rx='8' fill='#d71920'/><text x='295' y='520' fill='#fff' text-anchor='middle' font-size='22' font-family='Microsoft YaHei' font-weight='900'>&#x710A;&#x6750;</text>
<rect x='450' y='420' width='150' height='120' rx='12' fill='#151515' filter='url(#shadow)'/><rect x='478' y='436' width='94' height='54' rx='8' fill='#d71920'/><text x='525' y='520' fill='#fff' text-anchor='middle' font-size='22' font-family='Microsoft YaHei' font-weight='900'>&#x5730;&#x7EBF;&#x5939;</text>
</svg>
"@
  Save-Svg $Name $Svg
}

BannerSvg "hero-list.svg" "&#x4E1C;&#x5347;&#x710A;&#x673A;" "&#x676D;&#x5DDE;&#x5730;&#x533A;&#x6388;&#x6743;&#x7ECF;&#x9500;&#x5546;"
BannerSvg "hero-detail.svg" "&#x4E1C;&#x5347;&#x710A;&#x673A;&#x4EA7;&#x54C1;&#x8BE6;&#x60C5;" "&#x7EBF;&#x4E0A;&#x9500;&#x552E;&#x5C55;&#x793A;&#x9875;"

$Products = @(
  @("arc250", "ARC-250", "&#x7535;&#x710A;&#x673A;", "arc", "&#x7A33;&#x5B9A;&#x7535;&#x6D41; &#x8F7B;&#x5DE7;&#x8010;&#x7528;"),
  @("mig270", "MIG-270", "&#x6C14;&#x4FDD;&#x710A;&#x673A;", "mig", "&#x9001;&#x4E1D;&#x5E73;&#x987A; &#x8FDE;&#x7EED;&#x710A;&#x63A5;"),
  @("tig315", "TIG-315", "&#x6C29;&#x5F27;&#x710A;&#x673A;", "tig", "&#x8D77;&#x5F27;&#x987A;&#x7545; &#x710A;&#x7F1D;&#x6F02;&#x4EAE;"),
  @("arc400", "ARC-400", "&#x5DE5;&#x7A0B;&#x6B3E;", "arc", "&#x5DE5;&#x7A0B;&#x65BD;&#x5DE5; &#x5F3A;&#x52B2;&#x8F93;&#x51FA;"),
  @("mig350", "MIG-350", "&#x5DE5;&#x4E1A;&#x6B3E;", "mig", "&#x5DE5;&#x4E1A;&#x4F5C;&#x4E1A; &#x7A33;&#x5B9A;&#x9AD8;&#x6548;")
)

foreach ($P in $Products) {
  ProductSvg "$($P[0])-main.svg" $P[1] $P[2] $P[3] $P[4]
  ProductSvg "$($P[0])-front.svg" $P[1] $P[2] $P[3] "&#x6B63;&#x9762;&#x63A7;&#x5236;&#x9762;&#x677F;"
  ProductSvg "$($P[0])-detail.svg" $P[1] $P[2] $P[3] "&#x6563;&#x70ED;&#x4E0E;&#x63A5;&#x53E3;&#x7EC6;&#x8282;"
  ProductSvg "$($P[0])-work.svg" $P[1] $P[2] $P[3] "&#x710A;&#x63A5;&#x4F5C;&#x4E1A;&#x6548;&#x679C;"
}

PartsSvg "parts-main.svg"
PartsSvg "parts-front.svg"
PartsSvg "parts-detail.svg"
PartsSvg "parts-work.svg"

MarketingSvg "selling-stable.svg" "&#x7A33;&#x5B9A;&#x7535;&#x6D41;" "&#x8F93;&#x51FA;&#x5E73;&#x7A33;&#xFF0C;&#x710A;&#x63A5;&#x66F4;&#x987A;" "&#x7A33;"
MarketingSvg "selling-cooling.svg" "&#x5DE5;&#x4E1A;&#x6563;&#x70ED;" "&#x8010;&#x7528;&#x673A;&#x8EAB;&#xFF0C;&#x9AD8;&#x9891;&#x4F7F;&#x7528;" "&#x51B7;"
MarketingSvg "selling-beginner.svg" "&#x65B0;&#x624B;&#x53CB;&#x597D;" "&#x65CB;&#x94AE;&#x6E05;&#x6670;&#xFF0C;&#x4E0A;&#x624B;&#x66F4;&#x5FEB;" "&#x6613;"
MarketingSvg "selling-portable.svg" "&#x79FB;&#x52A8;&#x65B9;&#x4FBF;" "&#x5DE5;&#x5730;&#x8F6C;&#x573A;&#xFF0C;&#x95E8;&#x5E97;&#x7EF4;&#x4FEE;" "&#x4FBF;"
MarketingSvg "selling-parts.svg" "&#x914D;&#x4EF6;&#x9F50;&#x5168;" "&#x710A;&#x67AA;&#x7535;&#x7F06;&#x6309;&#x9700;&#x642D;&#x914D;" "&#x914D;"
MarketingSvg "selling-service.svg" "&#x676D;&#x5DDE;&#x670D;&#x52A1;" "&#x6388;&#x6743;&#x7ECF;&#x9500;&#xFF0C;&#x54CD;&#x5E94;&#x66F4;&#x5FEB;" "&#x670D;"

MarketingSvg "scene-construction.svg" "&#x5DE5;&#x5730;&#x65BD;&#x5DE5;" "&#x94A2;&#x67B6;&#x5B89;&#x88C5;&#xFF0C;&#x73B0;&#x573A;&#x8865;&#x710A;" "&#x5DE5;"
MarketingSvg "scene-repair.svg" "&#x95E8;&#x5E97;&#x7EF4;&#x4FEE;" "&#x4E94;&#x91D1;&#x673A;&#x4FEE;&#xFF0C;&#x5E38;&#x5907;&#x8BBE;&#x5907;" "&#x4FEE;"
MarketingSvg "scene-diy.svg" "&#x5BB6;&#x5EAD; DIY" "&#x62A4;&#x680F;&#x519C;&#x5177;&#xFF0C;&#x7B80;&#x6613;&#x4FEE;&#x8865;" "&#x5BB6;"

Write-Host "Generated SVG assets in $outDir"
