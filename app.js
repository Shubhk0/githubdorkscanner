// GitHub Dorker - Enhanced Application Logic with 150+ Dorks (Fixed Version)
// by shubhk0
// Enhanced Dork Database organized by category (Original + 72 New Path-Based Dorks)
const DORK_DATABASE = {
    credentials: [
        // Original filename-based dorks
        { pattern: "filename:.npmrc _auth", risk: "high", description: "NPM authentication tokens", type: "filename" },
        { pattern: "filename:.dockercfg auth", risk: "high", description: "Docker registry credentials", type: "filename" },
        { pattern: "filename:credentials aws_access_key_id", risk: "high", description: "AWS credentials", type: "filename" },
        { pattern: "filename:.htpasswd", risk: "high", description: "Apache password files", type: "filename" },
        { pattern: "filename:.git-credentials", risk: "high", description: "Git stored credentials", type: "filename" },
        { pattern: "filename:.netrc password", risk: "high", description: "Network credentials file", type: "filename" },
        { pattern: "filename:_netrc password", risk: "high", description: "Network credentials file (underscore)", type: "filename" },
        { pattern: "filename:filezilla.xml Pass", risk: "high", description: "FileZilla saved passwords", type: "filename" },
        { pattern: "filename:recentservers.xml Pass", risk: "high", description: "Recent server passwords", type: "filename" },
        { pattern: "filename:config.json auths", risk: "high", description: "Docker config authentication", type: "filename" },
        { pattern: "filename:.pgpass", risk: "high", description: "PostgreSQL password file", type: "filename" },
        { pattern: "filename:proftpdpasswd", risk: "high", description: "ProFTPD password file", type: "filename" },
        { pattern: "[WFClient] Password= extension:ica", risk: "medium", description: "Citrix ICA passwords", type: "filename" },
        { pattern: "filename:server.cfg rcon password", risk: "medium", description: "Game server RCON passwords", type: "filename" },
        { pattern: "filename:configuration.php JConfig password", risk: "high", description: "Joomla configuration passwords", type: "filename" },
        { pattern: "filename:config.php dbpasswd", risk: "high", description: "PHP database passwords", type: "filename" },
        { pattern: "filename:config.php pass", risk: "high", description: "PHP configuration passwords", type: "filename" },
        { pattern: "filename:shadow path:etc", risk: "high", description: "Unix shadow password file", type: "filename" },
        { pattern: "filename:passwd path:etc", risk: "high", description: "Unix passwd file", type: "filename" },
        { pattern: "filename:.esmtprc password", risk: "high", description: "ESMTP configuration passwords", type: "filename" },
        { pattern: "extension:json googleusercontent client_secret", risk: "high", description: "Google OAuth client secrets", type: "filename" },
        { pattern: "filename:logins.json", risk: "high", description: "Browser saved logins", type: "filename" },
        { pattern: "msg nickserv identify filename:config", risk: "medium", description: "IRC NickServ passwords", type: "filename" },
        { pattern: "filename:secrets.yml password", risk: "high", description: "Rails secrets file", type: "filename" },
        { pattern: "filename:.ftpconfig", risk: "high", description: "FTP configuration files", type: "filename" },
        { pattern: "filename:github-recovery-codes.txt", risk: "high", description: "GitHub recovery codes", type: "filename" },
        { pattern: "filename:gitlab-recovery-codes.txt", risk: "high", description: "GitLab recovery codes", type: "filename" },
        { pattern: "filename:discord_backup_codes.txt", risk: "high", description: "Discord backup codes", type: "filename" },
        { pattern: "jsforce extension:js conn.login", risk: "high", description: "Salesforce credentials in JavaScript", type: "filename" },
        { pattern: "SF_USERNAME salesforce", risk: "high", description: "Salesforce usernames", type: "filename" },
        // New path-based dorks for credentials
        { pattern: "path:admin password", risk: "high", description: "Admin passwords", type: "path" },
        { pattern: "path:admin login", risk: "medium", description: "Admin login credentials", type: "path" },
        { pattern: "path:private password", risk: "high", description: "Passwords in private directories", type: "path" },
        { pattern: "path:secret password", risk: "high", description: "Passwords in secret directories", type: "path" },
        { pattern: "path:confidential password", risk: "high", description: "Confidential passwords", type: "path" },
        { pattern: "path:docker password", risk: "high", description: "Docker-related passwords", type: "path" },
        { pattern: "path:aws credentials", risk: "high", description: "AWS credentials in path", type: "path" },
        { pattern: "path:azure credentials", risk: "high", description: "Azure credentials in path", type: "path" },
        { pattern: "path:gcp credentials", risk: "high", description: "GCP credentials in path", type: "path" },
        { pattern: "path:scripts password", risk: "high", description: "Passwords in script directories", type: "path" },
        { pattern: "path:deploy password", risk: "high", description: "Deployment passwords", type: "path" },
        { pattern: "path:setup password", risk: "medium", description: "Setup script passwords", type: "path" },
        { pattern: "path:install password", risk: "medium", description: "Installation passwords", type: "path" },
        { pattern: "path:test password", risk: "medium", description: "Test passwords (often real)", type: "path" },
        { pattern: "path:tests password", risk: "medium", description: "Test directory passwords", type: "path" },
        { pattern: "path:dev password", risk: "medium", description: "Development passwords", type: "path" },
        { pattern: "path:staging password", risk: "high", description: "Staging environment passwords", type: "path" },
        { pattern: "path:logs password", risk: "medium", description: "Passwords in log files", type: "path" },
        { pattern: "path:log password", risk: "medium", description: "Passwords in log directory", type: "path" },
        { pattern: "path:tmp password", risk: "medium", description: "Passwords in temp files", type: "path" },
        { pattern: "path:temp password", risk: "medium", description: "Passwords in temp directories", type: "path" },
        { pattern: "path:cache password", risk: "low", description: "Cached passwords", type: "path" },
        { pattern: "path:terraform password", risk: "medium", description: "Terraform passwords", type: "path" },
        { pattern: "path:ansible password", risk: "medium", description: "Ansible passwords", type: "path" },
        { pattern: "path:www password", risk: "medium", description: "Web directory passwords", type: "path" },
        { pattern: "path:public password", risk: "medium", description: "Public directory passwords (misplaced)", type: "path" },
        { pattern: "path:assets password", risk: "low", description: "Passwords in assets", type: "path" },
        { pattern: "path:uploads password", risk: "medium", description: "Uploaded file passwords", type: "path" },
        { pattern: "path:api password", risk: "high", description: "API passwords", type: "path" },
        { pattern: "path:services password", risk: "medium", description: "Service passwords", type: "path" },
        { pattern: "path:build password", risk: "medium", description: "Build script passwords", type: "path" },
        { pattern: "path:ci password", risk: "medium", description: "CI/CD passwords", type: "path" },
        { pattern: "path:.github password", risk: "medium", description: "GitHub workflows passwords", type: "path" },
        { pattern: "path:.gitlab password", risk: "medium", description: "GitLab CI passwords", type: "path" },
        { pattern: "path:jenkins password", risk: "medium", description: "Jenkins passwords", type: "path" },
        { pattern: "path:monitoring password", risk: "medium", description: "Monitoring passwords", type: "path" },
        { pattern: "path:metrics password", risk: "medium", description: "Metrics passwords", type: "path" },
        { pattern: "path:ops password", risk: "medium", description: "Operations passwords", type: "path" },
        { pattern: "path:infra password", risk: "medium", description: "Infrastructure passwords", type: "path" },
        { pattern: "path:.svn password", risk: "medium", description: "SVN passwords", type: "path" },
        { pattern: "path:.hg password", risk: "medium", description: "Mercurial passwords", type: "path" },
        { pattern: "path:certificates password", risk: "medium", description: "Certificate passwords", type: "path" }
    ],
    keys: [
        // Original filename-based dorks
        { pattern: "extension:pem private", risk: "high", description: "Private key files", type: "filename" },
        { pattern: "extension:ppk private", risk: "high", description: "PuTTY private keys", type: "filename" },
        { pattern: "filename:id_rsa OR filename:id_dsa", risk: "high", description: "SSH private keys", type: "filename" },
        { pattern: "filename:idea14.key", risk: "medium", description: "IntelliJ IDEA license keys", type: "filename" },
        { pattern: "extension:avastlic \"support.avast.com\"", risk: "low", description: "Avast license files", type: "filename" },
        { pattern: "filename:settings.py SECRET_KEY", risk: "high", description: "Django secret keys", type: "filename" },
        { pattern: "filename:master.key path:config", risk: "high", description: "Rails master key", type: "filename" },
        // New path-based dorks for keys
        { pattern: "path:keys private", risk: "high", description: "Private keys in keys directory", type: "path" },
        { pattern: "path:certs private", risk: "high", description: "Private keys in certs directory", type: "path" },
        { pattern: "path:ssl private", risk: "high", description: "SSL private keys", type: "path" },
        { pattern: "path:pki private", risk: "high", description: "PKI private keys", type: "path" }
    ],
    tokens: [
        // Original filename-based dorks
        { pattern: "PT_TOKEN language:bash", risk: "high", description: "Pivotal Tracker tokens", type: "filename" },
        { pattern: "extension:json api.forecast.io", risk: "medium", description: "Weather API tokens", type: "filename" },
        { pattern: "HEROKU_API_KEY language:shell", risk: "high", description: "Heroku API keys in shell scripts", type: "filename" },
        { pattern: "HEROKU_API_KEY language:json", risk: "high", description: "Heroku API keys in JSON", type: "filename" },
        { pattern: "filename:hub oauth_token", risk: "high", description: "GitHub hub OAuth tokens", type: "filename" },
        { pattern: "JEKYLL_GITHUB_TOKEN", risk: "high", description: "Jekyll GitHub tokens", type: "filename" },
        { pattern: "shodan_api_key language:python", risk: "medium", description: "Shodan API keys in Python", type: "filename" },
        { pattern: "shodan_api_key language:shell", risk: "medium", description: "Shodan API keys in shell scripts", type: "filename" },
        { pattern: "shodan_api_key language:json", risk: "medium", description: "Shodan API keys in JSON", type: "filename" },
        { pattern: "shodan_api_key language:ruby", risk: "medium", description: "Shodan API keys in Ruby", type: "filename" },
        { pattern: "HOMEBREW_GITHUB_API_TOKEN language:shell", risk: "high", description: "Homebrew GitHub API tokens", type: "filename" },
        { pattern: "xoxp OR xoxb", risk: "high", description: "Slack API tokens", type: "filename" },
        { pattern: "\"api_hash\" \"api_id\"", risk: "high", description: "Telegram API credentials", type: "filename" },
        { pattern: "https://hooks.slack.com/services/", risk: "high", description: "Slack webhook URLs", type: "filename" },
        { pattern: "DATADOG_API_KEY language:shell", risk: "medium", description: "Datadog API keys", type: "filename" },
        // New path-based dorks for tokens
        { pattern: "path:config api_key", risk: "high", description: "API keys in config directories", type: "path" },
        { pattern: "path:secrets api_key", risk: "high", description: "API keys in secrets directory", type: "path" }
    ],
    database: [
        // Original filename-based dorks
        { pattern: "extension:sql mysql dump", risk: "medium", description: "MySQL database dumps", type: "filename" },
        { pattern: "extension:sql mysql dump password", risk: "high", description: "MySQL dumps with passwords", type: "filename" },
        { pattern: "rds.amazonaws.com password", risk: "high", description: "RDS connection strings", type: "filename" },
        { pattern: "extension:json mongolab.com", risk: "high", description: "MongoLab connection strings", type: "filename" },
        { pattern: "extension:yaml mongolab.com", risk: "high", description: "MongoLab YAML configs", type: "filename" },
        { pattern: "filename:robomongo.json", risk: "medium", description: "RoboMongo connection configs", type: "filename" },
        { pattern: "path:sites databases password", risk: "high", description: "Drupal database passwords", type: "filename" },
        { pattern: "filename:dbeaver-data-sources.xml", risk: "high", description: "DBeaver database connections", type: "filename" },
        { pattern: ".mlab.com password", risk: "high", description: "MLab database passwords", type: "filename" },
        { pattern: "extension:yaml cloud.redislabs.com", risk: "high", description: "Redis Labs connection configs", type: "filename" },
        { pattern: "extension:json cloud.redislabs.com", risk: "high", description: "Redis Labs JSON configs", type: "filename" },
        // New path-based dorks for database
        { pattern: "path:db password", risk: "high", description: "Database passwords", type: "path" },
        { pattern: "path:database password", risk: "high", description: "Database directory passwords", type: "path" },
        { pattern: "path:sql password", risk: "high", description: "SQL files with passwords", type: "path" },
        { pattern: "path:mysql password", risk: "high", description: "MySQL passwords in path", type: "path" },
        { pattern: "path:postgres password", risk: "high", description: "PostgreSQL passwords in path", type: "path" },
        { pattern: "path:backup password", risk: "high", description: "Passwords in backup directories", type: "path" },
        { pattern: "path:backups password", risk: "high", description: "Passwords in backups directories", type: "path" },
        { pattern: "path:backup .sql", risk: "medium", description: "SQL backups", type: "path" },
        { pattern: "path:backup config", risk: "medium", description: "Config backups", type: "path" }
    ],
    configuration: [
        // Original filename-based dorks
        { pattern: "filename:.s3cfg", risk: "high", description: "S3 configuration files", type: "filename" },
        { pattern: "filename:wp-config.php", risk: "high", description: "WordPress configuration", type: "filename" },
        { pattern: "filename:.env DB_USERNAME NOT homestead", risk: "high", description: "Environment files with DB credentials", type: "filename" },
        { pattern: "filename:.env MAIL_HOST=smtp.gmail.com", risk: "medium", description: "Email configuration in env files", type: "filename" },
        { pattern: "filename:.bashrc password", risk: "medium", description: "Bash config with passwords", type: "filename" },
        { pattern: "filename:.bashrc mailchimp", risk: "medium", description: "MailChimp credentials in bash config", type: "filename" },
        { pattern: "filename:.bash_profile aws", risk: "medium", description: "AWS credentials in bash profile", type: "filename" },
        { pattern: "filename:.tugboat NOT _tugboat", risk: "medium", description: "Tugboat configuration files", type: "filename" },
        { pattern: "filename:config irc_pass", risk: "medium", description: "IRC passwords in config", type: "filename" },
        { pattern: "filename:connections.xml", risk: "medium", description: "Database connection configs", type: "filename" },
        { pattern: "filename:express.conf path:.openshift", risk: "medium", description: "OpenShift Express configs", type: "filename" },
        { pattern: "filename:ventrilo_srv.ini", risk: "low", description: "Ventrilo server config", type: "filename" },
        { pattern: "filename:.cshrc", risk: "low", description: "C Shell configuration", type: "filename" },
        { pattern: "filename:sshd_config", risk: "medium", description: "SSH daemon configuration", type: "filename" },
        { pattern: "filename:dhcpd.conf", risk: "low", description: "DHCP daemon configuration", type: "filename" },
        { pattern: "filename:prod.exs NOT prod.secret.exs", risk: "low", description: "Elixir production config", type: "filename" },
        { pattern: "filename:prod.secret.exs", risk: "high", description: "Elixir secret production config", type: "filename" },
        { pattern: "filename:CCCam.cfg", risk: "low", description: "CCcam configuration files", type: "filename" },
        { pattern: "filename:deployment-config.json", risk: "medium", description: "Deployment configuration files", type: "filename" },
        { pattern: "filename:.remote-sync.json", risk: "medium", description: "Remote sync configuration", type: "filename" },
        { pattern: "filename:sftp.json path:.vscode", risk: "high", description: "VSCode SFTP configuration", type: "filename" },
        { pattern: "filename:WebServers.xml", risk: "medium", description: "IIS WebServers configuration", type: "filename" },
        { pattern: "filename:jupyter_notebook_config.json", risk: "low", description: "Jupyter notebook configuration", type: "filename" },
        { pattern: "filename:sftp-config.json", risk: "high", description: "SFTP configuration with credentials", type: "filename" },
        // New path-based dorks for configuration
        { pattern: "path:config password", risk: "high", description: "Passwords in config directories", type: "path" },
        { pattern: "path:config secret", risk: "high", description: "Secrets in config directories", type: "path" },
        { pattern: "path:config database", risk: "high", description: "Database configs in config directories", type: "path" },
        { pattern: "path:config credentials", risk: "high", description: "Credentials in config directories", type: "path" },
        { pattern: "path:config .env", risk: "high", description: "Environment files in config directories", type: "path" },
        { pattern: "path:admin config", risk: "medium", description: "Admin configuration files", type: "path" },
        { pattern: "path:admin secret", risk: "high", description: "Admin secrets", type: "path" },
        { pattern: "path:.git config", risk: "medium", description: "Git configuration files", type: "path" },
        { pattern: "path:.git credentials", risk: "high", description: "Git credentials", type: "path" },
        { pattern: "path:deployment config", risk: "medium", description: "Deployment configurations", type: "path" },
        { pattern: "path:development config", risk: "medium", description: "Development configurations", type: "path" },
        { pattern: "path:kubernetes secret", risk: "high", description: "Kubernetes secrets", type: "path" },
        { pattern: "path:k8s secret", risk: "high", description: "K8s secrets", type: "path" },
        { pattern: "path:helm secret", risk: "medium", description: "Helm chart secrets", type: "path" },
        { pattern: "path:microservices config", risk: "medium", description: "Microservice configurations", type: "path" }
    ],
    history: [
        // Original filename-based dorks
        { pattern: "filename:.bash_history", risk: "high", description: "Bash command history", type: "filename" },
        { pattern: "filename:.history", risk: "medium", description: "Shell command history", type: "filename" },
        { pattern: "filename:.sh_history", risk: "medium", description: "Shell command history", type: "filename" }
    ]
};

// Application state
let currentResults = [];
let selectedDorks = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('GitHub Dorker Enhanced initializing...');
    setupEventListeners();
    loadPreferences();
    updatePlaceholder();
    showDorkStatistics();
});

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Main action buttons
    const generateBtn = document.getElementById('generateBtn');
    const openAllBtn = document.getElementById('openAllBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (generateBtn) {
        console.log('Adding click listener to generate button');
        generateBtn.addEventListener('click', handleGenerateClick);
    }
    if (openAllBtn) openAllBtn.addEventListener('click', openAllInTabs);
    if (copyAllBtn) copyAllBtn.addEventListener('click', copyAllUrls);
    if (resetBtn) resetBtn.addEventListener('click', resetForm);

    // Export buttons
    const downloadCsvBtn = document.getElementById('downloadCsvBtn');
    const generateBookmarkletBtn = document.getElementById('generateBookmarkletBtn');
    const createReportBtn = document.getElementById('createReportBtn');

    if (downloadCsvBtn) downloadCsvBtn.addEventListener('click', downloadCsv);
    if (generateBookmarkletBtn) generateBookmarkletBtn.addEventListener('click', generateBookmarklet);
    if (createReportBtn) createReportBtn.addEventListener('click', createReport);

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.add('hidden');
        });
    });

    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });

    // Target type change handler
    document.querySelectorAll('input[name="targetType"]').forEach(radio => {
        radio.addEventListener('change', updatePlaceholder);
    });
}

function handleGenerateClick(event) {
    console.log('Generate button clicked');
    event.preventDefault();
    generateSearchUrls();
}

function showDorkStatistics() {
    // Calculate total dorks and breakdown
    let totalDorks = 0;
    let pathBasedDorks = 0;
    let filenameBasedDorks = 0;

    Object.values(DORK_DATABASE).forEach(category => {
        category.forEach(dork => {
            totalDorks++;
            if (dork.type === 'path') {
                pathBasedDorks++;
            } else {
                filenameBasedDorks++;
            }
        });
    });

    console.log(`Total Dorks: ${totalDorks} (${pathBasedDorks} path-based, ${filenameBasedDorks} filename-based)`);
}

function updatePlaceholder() {
    const targetTypeRadio = document.querySelector('input[name="targetType"]:checked');
    const targetName = document.getElementById('targetName');
    
    if (!targetTypeRadio || !targetName) return;
    
    const targetType = targetTypeRadio.value;
    const placeholders = {
        org: 'e.g., microsoft, google, facebook',
        user: 'e.g., octocat, defunkt, mojombo',
        repo: 'e.g., microsoft/vscode, facebook/react',
        global: 'Leave empty for global search'
    };
    targetName.placeholder = placeholders[targetType] || '';
}

function loadPreferences() {
    // Note: Not using localStorage to comply with restrictions
    console.log('Preferences loading skipped (localStorage not available)');
}

function savePreferences() {
    // Note: Not using localStorage to comply with restrictions
    console.log('Preferences saving skipped (localStorage not available)');
}

function generateSearchUrls() {
    console.log('Generate Search URLs function called');
    
    const targetTypeRadio = document.querySelector('input[name="targetType"]:checked');
    const targetName = document.getElementById('targetName');
    const highRiskOnly = document.getElementById('highRiskOnly');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!targetTypeRadio || !targetName || !highRiskOnly || !categoryFilter) {
        console.error('Required elements not found');
        return;
    }
    
    const targetType = targetTypeRadio.value;
    const targetNameValue = targetName.value.trim();
    const highRiskOnlyValue = highRiskOnly.checked;
    const categoryFilterValue = categoryFilter.value;

    console.log('Form values:', { targetType, targetNameValue, highRiskOnlyValue, categoryFilterValue });

    // Validate input
    if (targetType !== 'global' && !targetNameValue) {
        alert('Please enter a target name or select "Global Search"');
        return;
    }

    // Show progress
    showProgress();

    // Generate results immediately (removed delay that might cause issues)
    try {
        currentResults = [];
        selectedDorks.clear();

        const categories = categoryFilterValue === 'all' ? Object.keys(DORK_DATABASE) : [categoryFilterValue];
        
        categories.forEach(category => {
            const dorks = DORK_DATABASE[category];
            if (!dorks) return;

            const filteredDorks = dorks.filter(dork => {
                if (highRiskOnlyValue && dork.risk !== 'high') return false;
                return true;
            });

            filteredDorks.forEach(dork => {
                const url = buildSearchUrl(dork.pattern, targetType, targetNameValue);
                currentResults.push({
                    category,
                    pattern: dork.pattern,
                    description: dork.description,
                    risk: dork.risk,
                    type: dork.type,
                    url,
                    id: Math.random().toString(36).substr(2, 9)
                });
            });
        });

        console.log('Generated results:', currentResults.length);
        
        hideProgress();
        displayResults();
    } catch (error) {
        console.error('Error generating URLs:', error);
        hideProgress();
        alert('Error generating search URLs. Please try again.');
    }
}

function buildSearchUrl(pattern, targetType, targetName) {
    let query = pattern;
    
    if (targetType === 'org' && targetName) {
        query = `${pattern} org:${targetName}`;
    } else if (targetType === 'user' && targetName) {
        query = `${pattern} user:${targetName}`;
    } else if (targetType === 'repo' && targetName) {
        query = `${pattern} repo:${targetName}`;
    }
    
    return `https://github.com/search?q=${encodeURIComponent(query)}&type=code`;
}

function showProgress() {
    const progressSection = document.querySelector('.progress-section');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressSection) progressSection.style.display = 'block';
    if (progressFill) progressFill.classList.add('loading');
    if (progressText) progressText.textContent = 'Generating search URLs...';
}

function hideProgress() {
    const progressSection = document.querySelector('.progress-section');
    const progressFill = document.querySelector('.progress-fill');
    
    if (progressSection) progressSection.style.display = 'none';
    if (progressFill) progressFill.classList.remove('loading');
}

function displayResults() {
    console.log('Displaying results...');
    
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsSection = document.getElementById('resultsSection');
    const totalCount = document.getElementById('totalCount');
    const pathBasedCount = document.getElementById('pathBasedCount');
    const exportSection = document.getElementById('exportSection');
    const openAllBtn = document.getElementById('openAllBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    
    if (!resultsContainer) {
        console.error('Results container not found');
        return;
    }

    if (currentResults.length === 0) {
        resultsContainer.innerHTML = '<div class="text-center">No dorks found with current filters.</div>';
        if (resultsSection) resultsSection.style.display = 'block';
        return;
    }

    // Calculate statistics
    const pathBased = currentResults.filter(r => r.type === 'path').length;
    const filenameBased = currentResults.filter(r => r.type === 'filename').length;

    // Group results by category
    const groupedResults = {};
    currentResults.forEach(result => {
        if (!groupedResults[result.category]) {
            groupedResults[result.category] = [];
        }
        groupedResults[result.category].push(result);
    });

    // Update counts
    if (totalCount) totalCount.textContent = currentResults.length;
    if (pathBasedCount) pathBasedCount.textContent = `(${pathBased} path-based, ${filenameBased} filename-based)`;

    // Create HTML
    let html = '';
    Object.keys(groupedResults).forEach(category => {
        const results = groupedResults[category];
        html += `
            <div class="category-section" data-category="${category}">
                <div class="category-header" onclick="toggleCategory('${category}')">
                    <h3 class="category-title">${capitalizeFirst(category)}</h3>
                    <div class="category-badge">
                        <span class="category-count">${results.length}</span>
                        <span class="expand-icon">▼</span>
                    </div>
                </div>
                <div class="category-content">
                    ${results.map(result => createDorkItemHtml(result)).join('')}
                </div>
            </div>
        `;
    });

    resultsContainer.innerHTML = html;
    if (resultsSection) resultsSection.style.display = 'block';
    if (exportSection) exportSection.style.display = 'block';
    
    // Enable action buttons
    if (openAllBtn) openAllBtn.disabled = false;
    if (copyAllBtn) copyAllBtn.disabled = false;

    // Expand first category
    setTimeout(() => {
        const firstCategory = document.querySelector('.category-section');
        if (firstCategory) {
            firstCategory.classList.add('expanded');
        }
    }, 100);
}

function createDorkItemHtml(result) {
    const pathIndicator = result.type === 'path' ? '<span class="path-indicator">PATH</span>' : '';
    const patternClass = result.type === 'path' ? 'dork-pattern path-based' : 'dork-pattern';
    
    return `
        <div class="dork-item" data-id="${result.id}">
            <input type="checkbox" class="dork-checkbox" onchange="toggleDorkSelection('${result.id}')">
            <div class="dork-content">
                <div class="${patternClass}">${escapeHtml(result.pattern)}${pathIndicator}</div>
                <div class="dork-description">${escapeHtml(result.description)}</div>
                <a href="${result.url}" target="_blank" class="dork-url">${result.url}</a>
            </div>
            <div class="risk-badge risk-badge--${result.risk}">${result.risk}</div>
            <div class="dork-actions">
                <button class="btn-icon btn-icon--primary" onclick="window.open('${escapeHtml(result.url)}', '_blank')" title="Open search">🔍</button>
                <button class="btn-icon btn-icon--secondary" onclick="copyToClipboard('${escapeHtml(result.url)}')" title="Copy URL">📋</button>
            </div>
        </div>
    `;
}

// Make these functions globally available
window.toggleCategory = function(category) {
    const section = document.querySelector(`[data-category="${category}"]`);
    if (section) section.classList.toggle('expanded');
};

window.toggleDorkSelection = function(id) {
    if (selectedDorks.has(id)) {
        selectedDorks.delete(id);
    } else {
        selectedDorks.add(id);
    }
};

function openAllInTabs() {
    const tabLimit = document.getElementById('tabLimit');
    const limit = tabLimit ? parseInt(tabLimit.value) : 10;
    
    const urlsToOpen = selectedDorks.size > 0 
        ? currentResults.filter(r => selectedDorks.has(r.id)).slice(0, limit)
        : currentResults.slice(0, limit);

    if (urlsToOpen.length === 0) {
        alert('No URLs to open. Generate search URLs first.');
        return;
    }

    if (urlsToOpen.length > 10) {
        const confirm = window.confirm(`This will open ${urlsToOpen.length} tabs. Continue?`);
        if (!confirm) return;
    }

    urlsToOpen.forEach((result, index) => {
        setTimeout(() => {
            window.open(result.url, '_blank');
        }, index * 200); // Delay to prevent browser blocking
    });
}

function copyAllUrls() {
    const urlsToCopy = selectedDorks.size > 0 
        ? currentResults.filter(r => selectedDorks.has(r.id))
        : currentResults;

    const urls = urlsToCopy.map(r => r.url).join('\n');
    copyToClipboard(urls);
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!');
    } catch (err) {
        showNotification('Failed to copy to clipboard');
    }
    document.body.removeChild(textArea);
}

function downloadCsv() {
    const csvData = [
        ['Category', 'Pattern', 'Description', 'Risk', 'Type', 'URL']
    ];

    currentResults.forEach(result => {
        csvData.push([
            result.category,
            result.pattern,
            result.description,
            result.risk,
            result.type,
            result.url
        ]);
    });

    const csvContent = csvData.map(row => 
        row.map(field => `"${field.replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    downloadFile('github-dorks-enhanced.csv', csvContent, 'text/csv');
}

function generateBookmarklet() {
    const bookmarkletCode = `
javascript:(function(){
    const url = window.location.href;
    const github = url.match(/github\.com\/([^\/]+)(?:\/([^\/]+))?/);
    if (!github) {
        alert('Please run this on a GitHub page');
        return;
    }
    const owner = github[1];
    const repo = github[2];
    const target = repo ? owner + '/' + repo : owner;
    const targetType = repo ? 'repo' : 'user';
    const dorkerUrl = '${window.location.origin}${window.location.pathname}#auto=' + encodeURIComponent(JSON.stringify({target, targetType}));
    window.open(dorkerUrl, '_blank');
})();
    `.trim();

    const bookmarkletCode2 = document.getElementById('bookmarkletCode');
    const bookmarkletLink = document.getElementById('bookmarkletLink');
    const bookmarkletModal = document.getElementById('bookmarkletModal');

    if (bookmarkletCode2) bookmarkletCode2.value = bookmarkletCode;
    if (bookmarkletLink) bookmarkletLink.href = bookmarkletCode;
    if (bookmarkletModal) bookmarkletModal.classList.remove('hidden');
}

function createReport() {
    const targetName = document.getElementById('targetName');
    const targetTypeRadio = document.querySelector('input[name="targetType"]:checked');
    const highRiskOnly = document.getElementById('highRiskOnly');
    const categoryFilter = document.getElementById('categoryFilter');
    const reportModal = document.getElementById('reportModal');
    
    // Calculate statistics
    const pathBased = currentResults.filter(r => r.type === 'path').length;
    const filenameBased = currentResults.filter(r => r.type === 'filename').length;
    const highRisk = currentResults.filter(r => r.risk === 'high').length;
    const mediumRisk = currentResults.filter(r => r.risk === 'medium').length;
    const lowRisk = currentResults.filter(r => r.risk === 'low').length;

    const report = {
        timestamp: new Date().toISOString(),
        target: targetName ? targetName.value : '',
        targetType: targetTypeRadio ? targetTypeRadio.value : 'unknown',
        filters: {
            highRiskOnly: highRiskOnly ? highRiskOnly.checked : false,
            category: categoryFilter ? categoryFilter.value : 'all'
        },
        statistics: {
            total: currentResults.length,
            pathBased,
            filenameBased,
            highRisk,
            mediumRisk,
            lowRisk
        },
        results: currentResults
    };

    const reportHtml = `
        <div class="report">
            <h4>Enhanced GitHub Dorking Report</h4>
            <p><strong>Generated:</strong> ${new Date(report.timestamp).toLocaleString()}</p>
            <p><strong>Target:</strong> ${report.target || 'Global'} (${report.targetType})</p>
            
            <div class="enhanced-stats">
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.total}</span>
                    <div class="stat-label">Total Dorks</div>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.pathBased}</span>
                    <div class="stat-label">Path-Based</div>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.filenameBased}</span>
                    <div class="stat-label">Filename-Based</div>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.highRisk}</span>
                    <div class="stat-label">High Risk</div>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.mediumRisk}</span>
                    <div class="stat-label">Medium Risk</div>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${report.statistics.lowRisk}</span>
                    <div class="stat-label">Low Risk</div>
                </div>
            </div>
        </div>
    `;

    const reportContent = document.getElementById('reportContent');
    if (reportContent) reportContent.innerHTML = reportHtml;
    
    const downloadReportBtn = document.getElementById('downloadReportBtn');
    if (downloadReportBtn) {
        downloadReportBtn.onclick = () => {
            const reportJson = JSON.stringify(report, null, 2);
            downloadFile('github-dork-enhanced-report.json', reportJson, 'application/json');
        };
    }

    if (reportModal) reportModal.classList.remove('hidden');
}

function resetForm() {
    const targetName = document.getElementById('targetName');
    const highRiskOnly = document.getElementById('highRiskOnly');
    const categoryFilter = document.getElementById('categoryFilter');
    const resultsSection = document.getElementById('resultsSection');
    const exportSection = document.getElementById('exportSection');
    const openAllBtn = document.getElementById('openAllBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    
    if (targetName) targetName.value = '';
    if (highRiskOnly) highRiskOnly.checked = false;
    if (categoryFilter) categoryFilter.value = 'all';
    if (resultsSection) resultsSection.style.display = 'none';
    if (exportSection) exportSection.style.display = 'none';
    if (openAllBtn) openAllBtn.disabled = true;
    if (copyAllBtn) copyAllBtn.disabled = true;
    
    currentResults = [];
    selectedDorks.clear();
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function downloadFile(filename, content, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        z-index: 10000;
        font-size: 14px;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

// Handle auto-execution from bookmarklet
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#auto=')) {
        try {
            const params = JSON.parse(decodeURIComponent(hash.substring(6)));
            const targetName = document.getElementById('targetName');
            const targetTypeRadio = document.querySelector(`input[name="targetType"][value="${params.targetType}"]`);
            
            if (targetName) targetName.value = params.target;
            if (targetTypeRadio) targetTypeRadio.checked = true;
            
            setTimeout(() => {
                generateSearchUrls();
            }, 1000);
        } catch (e) {
            console.warn('Could not parse auto parameters:', e);
        }
    }
});
