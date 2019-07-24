<script>
import WebFont from "webfontloader";
export default {
  created() {
    WebFont.load({
      google: {
        families: ["Open Sans:300,400,700"]
      }
    });
  }
};
</script>
