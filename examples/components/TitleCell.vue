<template>
  <div>
    <TitleCell>
      这是有底线的cell
    </TitleCell>
    <br>
    <br>
    <TitleCell :showBorderTop="false" :showBorderBottom="false">
      这是没有border的cell
    </TitleCell>
  </div>
</template>
