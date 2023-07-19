'use strict';
// Saves options to chrome.storage
const saveOptions = () => {
    const theme_select = document.getElementById('theme_select').value;

    chrome.storage.sync.set(
        { theme: theme_select, },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        { theme: 'oxygen' },
        (items) => {
            document.getElementById('theme_select').value = items.theme;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);