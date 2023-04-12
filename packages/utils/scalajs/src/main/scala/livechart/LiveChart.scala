import scala.scalajs.js
import scala.scalajs.js.annotation._

@JSExportTopLevel("Foobaz")
class Foobaz(name: String) extends js.Object {
  def suffixer(suffix: String): String = name + suffix
}

@JSExportTopLevel("nice")
def nice(x: String): String = x + "!"