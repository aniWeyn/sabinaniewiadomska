<template>
  <div class="grid">
      <div class="row--top">
    <span class="name header">Sabina</span>
    </div>
    <div class="column--right">
        <span class="surname header">Niewiadomska</span>
    </div>

        <div class="teddy">
            <iframe loading="lazy" width="660" height="300" src="https://www.youtube-nocookie.com/embed/OF2U17HNOzs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="miloscPrawdziwa">
        <iframe loading="lazy" width="660" height="300" 
        src="https://www.youtube-nocookie.com/embed/tB7jlpqnuk4?controls=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    <div class="adele">
        <iframe loading="lazy" width="531" height="311" src="https://www.youtube-nocookie.com/embed/05K2N2094-M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: "artistpage",
  components: {
  }
};
</script>

<style>

.grid {
  display: grid;
  grid-template-columns:  0.5fr 1fr 1fr 1fr 0.5fr;
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

.row--top{
  grid-column: 1 / 5;
  grid-row: 1;
}

.column--right{
  grid-column: 5;
  grid-row: 1 / 5;
  display: flex;
  justify-content: end;
}

.box{
  display: flex;
  justify-content: center;
}

.mp3{
    grid-column: 2;
  grid-row: 2;
}

.teddy{
  grid-column: 3 / 5;
  grid-row: 2 / 4;
}


.miloscPrawdziwa{
  grid-column: 1 / 3;
  grid-row: 5 / 7;
}

.adele{
  grid-column: 4/6;
  grid-row: 6/8;
}

.header{
  font-size: 6rem;  
  color: rgb(66, 58, 58);
}

.surname.header{
    writing-mode: vertical-lr;
}



</style>
