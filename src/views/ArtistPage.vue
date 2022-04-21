<template>
  <div class="grid">
      <div class="row--top">
    <span class="name header">Sabina</span>
    </div>
    <div class="column--right">
        <span class="surname header">Niewiadomska</span>
    </div>
    <section class="mp3">
        <figure>
    <audio
        controls
        src="../assets/media/Kaziu2.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
     <figcaption>"Kaziu, zakochaj się" <br /> lyrics: Jeremi Przybora, music: Jerzy Wasowski</figcaption>
</figure>
    </section>

        <div class="teddy">
            <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube-nocookie.com/embed/OF2U17HNOzs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="miloscPrawdziwa">
        <iframe loading="lazy" width="auto" height="auto" 
        src="https://www.youtube-nocookie.com/embed/tB7jlpqnuk4?controls=0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    <div class="adele">
        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube-nocookie.com/embed/05K2N2094-M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="dworzec">
        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube-nocookie.com/embed/RpYTcJsHPJI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="swieta">
        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/_U3vqLnBrk0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="greaterlove">
        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/n8ipPPd5J_E?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
     <div class="malowiejskikrajobraz">
<iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/TPDbg3XpP8o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
  <div class="cichywielbiciel">
    <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/cOfZSB5qEA0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

 <div class="cichywielbiciel">
    <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/cOfZSB5qEA0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

 <div class="jessiej">
<iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/dxWaTBJ7fdI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
 <div class="deszcz">
<iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/WvFsZurWw0w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
 <div class="stop">
<iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/11ZyN-kIF1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
    <div class="tancbuda">
        <iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/9D6_nwMbJEU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
 <div class="timeaftertime">
<iframe loading="lazy" width="auto" height="auto" src="https://www.youtube.com/embed/Si0crQBsBos?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    grid-column: 2/4;
  grid-row: 2;
}

.teddy{
  grid-column: 2;
  grid-row: 4;
}


.miloscPrawdziwa{
  grid-column: 3;
  grid-row: 5;
}

.adele{
  grid-column: 4;
  grid-row: 6;
}

.dworzec{
  grid-column: 2;
  grid-row: 7;
}

.swieta{
  grid-column: 2;
  grid-row: 7;
}

.greaterlove{
  grid-column: 3;
  grid-row: 7;
}

.pukpukpuk{
  grid-column: 2;
  grid-row: 8;
}

.cichywielbiciel{
  grid-column: 3;
  grid-row: 8;
}

.jessiej{
  grid-column: 4;
  grid-row: 8;
}

.malowiejskikrajobraz{
  grid-column: 2;
  grid-row: 9;
}

.deszcz{
  grid-column: 3;
  grid-row: 10;
}


.stop{
  grid-column: 4;
  grid-row: 11;
}

.tancbuda{
  grid-column: 2;
  grid-row: 12;
}

.timeaftertime{
  grid-column: 4;
  grid-row: 12;
}

.header{
  font-size: 6rem;  
  color: rgb(66, 58, 58);
}

.surname.header{
    writing-mode: vertical-lr;
}



</style>
