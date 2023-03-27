if status is-interactive
    # Commands to run in interactive sessions can go here
    setup_abbreviations
end

# Override fish greeting
set fish_greeting

# Default editor
set -gx EDITOR nvim

# Force 24-bit color support
set -gx fish_term24bit 1

# Init zoxide
zoxide init fish | source

# Init Starship
starship init fish | source
