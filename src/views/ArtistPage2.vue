<template>
  <div class="grid">
    <!--
      <div class="row--top">
    
    </div>-->
    <div class="column--right">
      <span class="surname header">Niewiadomska</span><br/>
      <span class="surname header">Sabina</span>
    </div>
    <div>
    </div>
    <!--
    <section class="title">
    <h3>Jazz Standards</h3>
    </section> -->
    <div class="row--2">
        <figure>
          
          <audio controls src="../assets/media/Kaziu2.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
           <figcaption>Autumn Leaves</figcaption>
           <figcaption>piano: <a target="_blank" href="https://www.kjetiljerve.com/">Kjetil Jerve</a></figcaption>
        </figure>
    </div>
    <div class="row--2"> 
        <figure>
          <audio controls  src="../assets/media/Kaziu2.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <figcaption>Rosemary Baby</figcaption>
          <figcaption>piano: <a target="_blank" href="https://www.kjetiljerve.com/">Kjetil Jerve</a></figcaption>
        </figure>
    </div>
        <!--
            <section class="title">
    <h3>Improvisations</h3>
    </section>-->
    <!--
        <div class="row--4">
        <figure>
          <audio controls src="../assets/media/Kaziu2.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <figcaption>Improvisation 1</figcaption>
        </figure>
    </div>
    <div class="row--4">
        <figure>
          <audio controls src="../assets/media/Kaziu2.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <figcaption>Improvisation 2</figcaption>
        </figure>
    </div>
        <div class="row--4">
        <figure>
          <audio controls src="../assets/media/Kaziu2.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <figcaption>Improvisation 3</figcaption>
        </figure>
        </div>-->
    </div>
</template>

<script>
export default {
  name: "artistpage",
  components: {
  }
};
</script>

<style scoped>

.grid {
  display: grid;
  grid-template-columns:  0.5fr 1fr 1fr 1fr 0.5fr;
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

/*
.row--top{
  grid-column: 1 / 5;
  grid-row: 1;
}
*/

.title{
  grid-column: 1 / 5;
}

.column--right{
  grid-column: 1/3;
  grid-row: 1;
}

.row--2{
  grid-row: 2;
}

.row--4{
  grid-row: 4;
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

/*
.surname.header{
    writing-mode: vertical-lr;
}
*/

audio::-webkit-media-controls-panel {
  background-color: white;
}

figcaption{
    padding-left: 20px;
}
/*

audio::-webkit-media-controls-mute-button {
  background-color: #B1D4E0;
  border-radius: 50%;
}

audio::-webkit-media-controls-play-button {
  background-color: #B1D4E0;
  border-radius: 50%;
}

audio::-webkit-media-controls-current-time-display {
  color: #fff;
}

audio::-webkit-media-controls-time-remaining-display {
  color: #fff;
}

audio::-webkit-media-controls-timeline {
  background-color: #B1D4E0;
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 10px;
}

*/
</style>
