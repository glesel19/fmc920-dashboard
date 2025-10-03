<script>
  /**
     * @type {null}
     */
  let gpsData = null;

  async function loadGPS() {
    try {
      const res = await fetch("/api/gps"); // goes through Vercel → Pi
      gpsData = await res.json();
    } catch (err) {
      console.error("Error fetching GPS:", err);
    }
  }

  loadGPS();
</script>

<h1>FMC920 GPS Dashboard</h1>

{#if gpsData}
  <h2>Latest Data</h2>
  <pre>{JSON.stringify(gpsData, null, 2)}</pre>
{:else}

  <p>Loading GPS data...</p>
{/if}
