<template>
  <div class="grid">
    <div class="column--right">
        <span class="surname header name">Sabina</span>
        <span class="surname header">Niewiadomska</span>
    </div>
    <div class="row--2">
        <figure>
          
          <audio controls controlsList="nodownload noplaybackrate" src="../assets/media/leaves-256.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
           <figcaption>Autumn Leaves</figcaption>
           <figcaption>piano: <a target="_blank" href="https://www.kjetiljerve.com/">Kjetil Jerve</a></figcaption>
        </figure>
    </div>
    <div class="row--2"> 
        <figure>
          <audio controls controlsList="nodownload noplaybackrate" src="../assets/media/rosemary-256.mp3">
            Your browser does not support the <code>audio</code> element.
          </audio>
          <figcaption>Rosemary Baby</figcaption>
          <figcaption>piano: <a target="_blank" href="https://www.kjetiljerve.com/">Kjetil Jerve</a></figcaption>
        </figure>
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

<style scoped>
.grid {
  display: grid;
  grid-template-columns:  1fr;
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

.column--right{
  grid-column: 1;
  grid-row: 1;
}


.header{
  font-size: 3rem;  
  color: rgb(66, 58, 58);
}

.name{
display: block;
}

@media (min-width: 1032px) {

.grid {
  display: grid;
  grid-template-columns:  0.5fr 1fr 1fr 1fr 0.5fr;
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
}

.column--right{
  grid-column: 5;
  grid-row: 1 / 5;
  display: flex;
  justify-content: end;
}

.row--2{
  grid-row: 2;
}

.header{
  font-size: 6rem;  
  color: rgb(66, 58, 58);
}

.surname.header{
    writing-mode: vertical-lr;
}
}

audio::-webkit-media-controls-panel {
  background-color: white;
}

figcaption{
    padding-left: 20px;
}
</style>
