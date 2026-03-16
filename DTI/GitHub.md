# Git & GitHub

<div class="tldr-block">
    <h4>TL;DR</h4>
    <ul>
        <li><strong>Git:</strong> A distributed version control system that tracks changes and enables safe collaboration.</li>
        <li><strong>GitHub:</strong> A hosted platform for Git repos + collaboration tools (PRs, Issues, Actions).</li>
        <li><strong>Core Flow:</strong> Branch -> Commit -> Push -> Pull Request -> Review -> Merge.</li>
        <li><strong>Power Move:</strong> Use forks for open source, branches for features, and PRs for clean reviews.</li>
    </ul>
</div>

<div class="modern-note">

## Meaning & Purpose

<div class="definition-grid">
    <div class="definition-card">
        <h3>Git (Meaning)</h3>
        <p><strong>Git</strong> is a distributed version control system that records snapshots of your project so you can track changes, roll back safely, and collaborate without overwriting others.</p>
        <div class="mini-list">
            <div>- Keep history of every change</div>
            <div>- Work offline with full project history</div>
            <div>- Resolve conflicts with confidence</div>
        </div>
    </div>
    <div class="definition-card">
        <h3>GitHub (Meaning)</h3>
        <p><strong>GitHub</strong> is a cloud platform that hosts Git repositories and adds collaboration features like pull requests, issues, code review, and automation.</p>
        <div class="mini-list">
            <div>- Share code with teams or the public</div>
            <div>- Review changes with PRs</div>
            <div>- Automate tests & deployments</div>
        </div>
    </div>
</div>

---

## Use Cases (When & Why)

<div class="usecase-grid">
    <div class="usecase-card">
        <h4>Solo Developer</h4>
        <p>Track versions, experiment with branches, and revert mistakes safely.</p>
    </div>
    <div class="usecase-card">
        <h4>Team Collaboration</h4>
        <p>Everyone works on their own branches, submits PRs, and merges only reviewed code.</p>
    </div>
    <div class="usecase-card">
        <h4>Open Source</h4>
        <p>Fork a project, contribute via PRs, and sync your fork with upstream changes.</p>
    </div>
    <div class="usecase-card">
        <h4>Backup & History</h4>
        <p>Even if your laptop crashes, your repo and full history live on GitHub.</p>
    </div>
</div>

---

## Git vs GitHub (Quick Comparison)

<div class="comparison-grid">
<div class="compare-card">
<h3>Git</h3>
<ul>
    <li>Version control system</li>
    <li>Runs locally on your machine</li>
    <li>Manages commits, branches, merges</li>
    <li>Works offline</li>
</ul>
</div>

<div class="compare-card alt">
<h3>GitHub</h3>
<ul>
    <li>Hosted platform for Git repositories</li>
    <li>Adds collaboration features</li>
    <li>Pull requests, code review, issues</li>
    <li>CI/CD and automation</li>
</ul>
</div>
</div>

---

## Core Git Commands (Syntax + Examples)

<div class="command-grid">

<div class="command-card">
<h4>git init</h4>
<div class="cmd">Syntax: <code>git init</code></div>
<div class="cmd">Example: <code>git init</code></div>
<p>Start a new Git repository in the current folder.</p>
</div>

<div class="command-card">
<h4>git clone</h4>
<div class="cmd">Syntax: <code>git clone &lt;url&gt;</code></div>
<div class="cmd">Example: <code>git clone https://github.com/user/repo.git</code></div>
<p>Download a remote repository to your machine.</p>
</div>

<div class="command-card">
<h4>git status</h4>
<div class="cmd">Syntax: <code>git status</code></div>
<div class="cmd">Example: <code>git status</code></div>
<p>See modified files and current branch state.</p>
</div>

<div class="command-card">
<h4>git add</h4>
<div class="cmd">Syntax: <code>git add &lt;file|folder&gt;</code></div>
<div class="cmd">Example: <code>git add src/</code></div>
<p>Stage changes so they can be committed.</p>
</div>

<div class="command-card">
<h4>git commit</h4>
<div class="cmd">Syntax: <code>git commit -m "message"</code></div>
<div class="cmd">Example: <code>git commit -m "Add login page"</code></div>
<p>Save a snapshot of staged changes.</p>
</div>

<div class="command-card">
<h4>git log</h4>
<div class="cmd">Syntax: <code>git log</code></div>
<div class="cmd">Example: <code>git log --oneline --graph</code></div>
<p>Show commit history in detail or compact form.</p>
</div>

<div class="command-card">
<h4>git diff</h4>
<div class="cmd">Syntax: <code>git diff</code></div>
<div class="cmd">Example: <code>git diff HEAD~1</code></div>
<p>View changes between commits or working tree.</p>
</div>

<div class="command-card">
<h4>git branch</h4>
<div class="cmd">Syntax: <code>git branch &lt;name&gt;</code></div>
<div class="cmd">Example: <code>git branch feature/auth</code></div>
<p>Create or list branches.</p>
</div>

<div class="command-card">
<h4>git switch</h4>
<div class="cmd">Syntax: <code>git switch &lt;name&gt;</code></div>
<div class="cmd">Example: <code>git switch feature/auth</code></div>
<p>Move to another branch (newer alternative to checkout).</p>
</div>

<div class="command-card">
<h4>git merge</h4>
<div class="cmd">Syntax: <code>git merge &lt;branch&gt;</code></div>
<div class="cmd">Example: <code>git merge feature/auth</code></div>
<p>Combine changes from another branch into current.</p>
</div>

<div class="command-card">
<h4>git pull</h4>
<div class="cmd">Syntax: <code>git pull</code></div>
<div class="cmd">Example: <code>git pull origin main</code></div>
<p>Fetch + merge changes from a remote branch.</p>
</div>

<div class="command-card">
<h4>git push</h4>
<div class="cmd">Syntax: <code>git push &lt;remote&gt; &lt;branch&gt;</code></div>
<div class="cmd">Example: <code>git push origin main</code></div>
<p>Upload your local commits to a remote repository.</p>
</div>

</div>

---

## GitHub CLI Commands (Syntax + Examples)

<div class="command-grid">

<div class="command-card gh">
<h4>gh auth login</h4>
<div class="cmd">Syntax: <code>gh auth login</code></div>
<div class="cmd">Example: <code>gh auth login</code></div>
<p>Authenticate the GitHub CLI with your account.</p>
</div>

<div class="command-card gh">
<h4>gh repo create</h4>
<div class="cmd">Syntax: <code>gh repo create &lt;name&gt; [flags]</code></div>
<div class="cmd">Example: <code>gh repo create notes --public --source=. --push</code></div>
<p>Create a GitHub repo and optionally push local code.</p>
</div>

<div class="command-card gh">
<h4>gh repo fork</h4>
<div class="cmd">Syntax: <code>gh repo fork &lt;repo&gt; [flags]</code></div>
<div class="cmd">Example: <code>gh repo fork owner/project --clone</code></div>
<p>Fork a repo to your account and optionally clone it.</p>
</div>

<div class="command-card gh">
<h4>gh repo sync</h4>
<div class="cmd">Syntax: <code>gh repo sync &lt;repo&gt; [flags]</code></div>
<div class="cmd">Example: <code>gh repo sync myuser/project-fork -b main</code></div>
<p>Sync your fork with the upstream repository.</p>
</div>

<div class="command-card gh">
<h4>gh pr create</h4>
<div class="cmd">Syntax: <code>gh pr create [flags]</code></div>
<div class="cmd">Example: <code>gh pr create --title "Fix nav" --body "Updates links"</code></div>
<p>Create a pull request from your current branch.</p>
</div>

<div class="command-card gh">
<h4>gh pr merge</h4>
<div class="cmd">Syntax: <code>gh pr merge &lt;number&gt; [flags]</code></div>
<div class="cmd">Example: <code>gh pr merge 42 --squash --delete-branch</code></div>
<p>Merge a PR with a chosen merge strategy.</p>
</div>

</div>

---

## GitHub Features & How to Use Them

<div class="feature-grid">

<div class="feature-card">
<h3>Forking</h3>
<p>Create your own copy of someone else's repo.</p>
<div class="steps">
<strong>Web UI Steps</strong>
<div>1. Open the repo on GitHub.</div>
<div>2. Click <em>Fork</em> (top-right).</div>
<div>3. Choose your account and create the fork.</div>
</div>
<div class="steps">
<strong>CLI Steps</strong>
<div>1. <code>gh repo fork owner/project --clone</code></div>
<div>2. Start working in the cloned fork.</div>
</div>
</div>

<div class="feature-card">
<h3>Branching</h3>
<p>Isolate work in a separate line of development.</p>
<div class="steps">
<strong>CLI Steps</strong>
<div>1. <code>git branch feature/login</code></div>
<div>2. <code>git switch feature/login</code></div>
</div>
<div class="steps">
<strong>Web UI Steps</strong>
<div>1. In GitHub, open the branch dropdown.</div>
<div>2. Type a new branch name, press Enter.</div>
</div>
</div>

<div class="feature-card">
<h3>Pull Requests (PRs)</h3>
<p>Request review before merging changes.</p>
<div class="steps">
<strong>CLI Steps</strong>
<div>1. <code>git push origin feature/login</code></div>
<div>2. <code>gh pr create --title "Add login" --body "Implements auth UI"</code></div>
</div>
<div class="steps">
<strong>Web UI Steps</strong>
<div>1. Click <em>Compare & pull request</em>.</div>
<div>2. Add title/description, click <em>Create PR</em>.</div>
</div>
</div>

<div class="feature-card">
<h3>Merging</h3>
<p>Combine PR changes into the target branch.</p>
<div class="steps">
<strong>CLI Steps</strong>
<div>1. <code>gh pr merge 42 --squash</code></div>
<div>2. <code>git pull origin main</code></div>
</div>
<div class="steps">
<strong>Web UI Steps</strong>
<div>1. Open the PR.</div>
<div>2. Click <em>Merge pull request</em>.</div>
</div>
</div>

<div class="feature-card">
<h3>Collaboration</h3>
<p>Work together with reviews, issues, and teams.</p>
<div class="steps">
<strong>Best Practice</strong>
<div>1. Use feature branches for new work.</div>
<div>2. Require PR reviews before merging.</div>
<div>3. Keep <code>main</code> stable and protected.</div>
</div>
</div>

<div class="feature-card">
<h3>Syncing a Fork</h3>
<p>Bring updates from the original repo into your fork.</p>
<div class="steps">
<strong>CLI Steps</strong>
<div>1. <code>gh repo sync myuser/project-fork -b main</code></div>
<div>2. <code>git pull</code> in your local fork if needed.</div>
</div>
<div class="steps">
<strong>Web UI Steps</strong>
<div>1. Open your fork on GitHub.</div>
<div>2. Click <em>Sync fork</em> -> <em>Update branch</em>.</div>
</div>
</div>

</div>

---

## .gitignore (What & Why)

<div class="definition-card">
<p><strong>.gitignore</strong> is a file that tells Git which files or folders to ignore, so you don't accidentally commit build output, secrets, or local config.</p>
</div>

<div class="note-block">
<strong>Example .gitignore</strong>
</div>

```gitignore
node_modules/
.env
.DS_Store
/dist
```

<div class="note-block">
<strong>Common Patterns</strong>
</div>
<div class="mini-list">
    <div><code>folder/</code> ignores a directory</div>
    <div><code>*.log</code> ignores all .log files</div>
    <div><code>!important.log</code> re-includes a file</div>
</div>

---

## Detailed Workflow 1: New Project -> GitHub

<div class="workflow-steps">
<div class="step">
<h4>1. Initialize Git</h4>
<code>git init</code>
<p>Create a new Git repository locally.</p>
</div>
<div class="step">
<h4>2. Add Files</h4>
<code>git add .</code>
<p>Stage all files for commit.</p>
</div>
<div class="step">
<h4>3. Commit</h4>
<code>git commit -m "Initial commit"</code>
<p>Save the first snapshot.</p>
</div>
<div class="step">
<h4>4. Create GitHub Repo</h4>
<code>gh repo create my-project --public --source=. --push</code>
<p>Creates the remote repo and pushes your code.</p>
</div>
<div class="step">
<h4>5. Verify</h4>
<p>Open GitHub and confirm the files appear.</p>
</div>
</div>

<br/>

---

<br/>

## Detailed Workflow 2: Fork -> Branch -> PR -> Merge -> Sync

<div class="workflow-steps">
<div class="step">
<h4>1. Fork & Clone</h4>
<code>gh repo fork owner/project --clone</code>
<p>Creates your fork and downloads it locally.</p>
</div>
<div class="step">
<h4>2. Create Feature Branch</h4>
<code>git switch -c fix/typo</code>
<p>Work in a clean, isolated branch.</p>
</div>
<div class="step">
<h4>3. Commit Changes</h4>
<code>git add .</code>
<code>git commit -m "Fix typo"</code>
<p>Save your update.</p>
</div>
<div class="step">
<h4>4. Push & PR</h4>
<code>git push origin fix/typo</code>
<code>gh pr create --title "Fix typo" --body "Small text correction"</code>
<p>Submit your changes for review.</p>
</div>
<div class="step">
<h4>5. Merge (Maintainer)</h4>
<code>gh pr merge 123 --squash</code>
<p>Merge after review or approvals.</p>
</div>
<div class="step">
<h4>6. Sync Your Fork</h4>
<code>gh repo sync myuser/project -b main</code>
<p>Bring upstream changes back into your fork.</p>
</div>
</div>

---

## Other Git Hosting Platforms

<div class="platform-grid">
    <div class="platform-card"><strong>GitLab</strong><br/>All-in-one DevOps platform with Git hosting.</div>
    <div class="platform-card"><strong>Bitbucket</strong><br/>Git hosting with deep Atlassian integration.</div>
    <div class="platform-card"><strong>Azure DevOps</strong><br/>Microsoft's repo + CI/CD + boards suite.</div>
    <div class="platform-card"><strong>SourceHut</strong><br/>Minimalist, developer-focused Git hosting.</div>
    <div class="platform-card"><strong>Gitea</strong><br/>Lightweight self-hosted Git service.</div>
    <div class="platform-card"><strong>Forgejo</strong><br/>Community-driven fork of Gitea.</div>
</div>

---

## Sources (Official Docs)

<div class="sources">
<ul>
    <li>Git overview: <a href="https://git-scm.com/about">git-scm.com/about</a></li>
    <li>Git commands: <a href="https://git-scm.com/docs">git-scm.com/docs</a></li>
    <li>gitignore: <a href="https://git-scm.com/docs/gitignore">git-scm.com/docs/gitignore</a></li>
    <li>GitHub basics: <a href="https://docs.github.com/en/get-started/start-your-journey/about-github-and-git">About GitHub and Git</a></li>
    <li>Branches: <a href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/about-branches">About branches</a></li>
    <li>Pull request merges: <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges">About PR merges</a></li>
    <li>Syncing forks: <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork">Syncing a fork</a></li>
    <li>GitHub CLI manual: <a href="https://cli.github.com/manual/">cli.github.com/manual</a></li>
    <li>Alternatives: <a href="https://about.gitlab.com/">GitLab</a>, <a href="https://bitbucket.org/">Bitbucket</a>, <a href="https://azure.microsoft.com/en-us/services/devops/">Azure DevOps</a>, <a href="https://sourcehut.org/">SourceHut</a>, <a href="https://gitea.com/">Gitea</a>, <a href="https://forgejo.org/">Forgejo</a></li>
</ul>
</div>

---

## Key Takeaways

<div class="callout">
<ul>
    <li>Git manages history; GitHub manages collaboration.</li>
    <li>Branches isolate work, PRs review it, merges finalize it.</li>
    <li>Forks power open source contributions and safe experimentation.</li>
</ul>
</div>

---

## External Resources & Deep Dives

Looking to master Git and GitHub? Explore these highly recommended external resources:

<div class="sources">
<ul>
    <li><a href="https://docs.github.com/en/get-started" target="_blank">GitHub Official Getting Started Guide</a> - The primary source for all things GitHub.</li>
    <li><a href="https://git-scm.com/book/en/v2" target="_blank">Pro Git Book</a> - The ultimate, free, and comprehensive book on Git.</li>
    <li><a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a> - A highly visual and interactive tutorial for understanding Git branches and merges.</li>
    <li><a href="https://training.github.com/" target="_blank">GitHub Cheat Sheet</a> - A handy reference guide for Git commands.</li>
    <li><a href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian Git Tutorials</a> - Excellent step-by-step guides covering advanced Git workflows.</li>
</ul>
</div>

</div>


