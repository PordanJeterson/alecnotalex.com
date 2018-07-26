defmodule AlecnotalexWeb.PageController do
  use AlecnotalexWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
