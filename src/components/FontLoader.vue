<script>
import WebFont from "webfontloader";
export default {
  created() {
    WebFont.load({
      google: {
        families: ["Open Sans:300,400,600,700"]
      }
    });
  }
};
</script>
