# John Reese MD WhatsApp Bot

A multi-functional WhatsApp bot with session management and pair code functionality.

## Features

- WhatsApp session generation with pair codes
- Multi-session management
- Bot commands and plugins
- File-based session storage
- QR code and pair code authentication methods

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Create WhatsApp Session

**Using Pair Code (Recommended):**
```bash
node session.cjs create my-bot +1234567890 --pair
```

**Using QR Code:**
```bash
node session.cjs create my-bot
```

### 3. Start the Bot
```bash
node index.js
```

## Session Management

### Create Session
```bash
# With pair code
node session.cjs create bot-name +1234567890 --pair

# With QR code  
node session.cjs create bot-name +1234567890
```

### List Sessions
```bash
node session.cjs list
```

### Delete Session
```bash
node session.cjs delete session-id
```

## Configuration

Edit `config.js` to customize:
- Bot settings
- Owner information
- Plugin configurations
- API keys and credentials

## File Structure

```
john-reese-md-bot/
├── session.cjs          # Session generator with pair code support
├── index.js             # Main bot file
├── config.js            # Configuration settings
├── command.js           # Command handler
├── package.json         # Dependencies
├── lib/                 # Helper functions
├── plugins/             # Bot command plugins
├── data/                # Data files
├── sessions/            # Session storage
└── README.md           # This file
```

## Plugins

The bot includes various plugins in the `plugins/` directory:
- Download commands (YouTube, TikTok, etc.)
- Media processing
- Group management
- Owner commands
- Fun tools

## Development

To add new commands, create files in the `plugins/` directory following the existing plugin structure.

## License

GPL-3.0 License - See the license headers in individual files.

## Author

Malvin King - https://github.com/Johnwayne209/John Reese 

## Support

For issues and support, check the individual plugin files for contact information.