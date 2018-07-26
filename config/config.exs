# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :alecnotalex,
  ecto_repos: [Alecnotalex.Repo]

# Configures the endpoint
config :alecnotalex, AlecnotalexWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "TREuzjVM98UU9vKwWirSZ6DScYlNj/cUEbXToYm26GMDC0GGEtPrcjn+4yB0KJl9",
  render_errors: [view: AlecnotalexWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Alecnotalex.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
