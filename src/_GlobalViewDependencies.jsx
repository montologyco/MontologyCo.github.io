// _GlobalViewDependencies.jsx
import TableDataFetch from './Global/GlobalFetch/ViewSwitcherFetch/TableFetch/TableDataFetch.jsx';

const GlobalViewDependencies = async () => {
    const activeApp = window.location.hostname.split('.')[0];
    
    const dependencies = {
        contacts: {
            label: 'Contacts',
            dependencies: ['phones', 'emails']
        }
    };

    let categories = [];
    if (activeApp === 'budgetology') {
        const setCategories = (fetchedCategories) => {categories = fetchedCategories.map(item => item.category);};
        await TableDataFetch('categories', setCategories);
    }

    let account_id = [];
    if (activeApp === 'budgetology') {
        const setAccountID = (fetchedAccountID) => {account_id = fetchedAccountID.map(item => item.account_id);};
        await TableDataFetch('accounts', setAccountID);
    }

    const alteredFields = {
        account_id: {
            type: 'select',
            options: account_id
        },
        category: {
            type: 'select',
            options: categories
        },

        account_type: {
            type: 'select',
            options: ['checking', 'credit card', 'investment', 'savings']
        },
        contact_type: {
            type: 'select',
            options: ['individual', 'business', 'PAC']
        },
        finance_type: {
            type: 'select',
            options: ['donation', 'expense', 'in-kind donation', 'personal contribution', 'personal loan']
        },
        email_type: {
            type: 'select',
            options: ['personal', 'work']
        },
        phone_type: {
            type: 'select',
            options: ['cell', 'mobile', 'work']
        },
        frequency: {
            type: 'select',
            options: ['weekly', 'bi-weekly', 'semi-monthly', 'monthly', 'bi-monthly', 'quarterly', 'semi-annually', 'annually', 'bi-annually', 'one-time']
        },

        created_at: {
            type: 'hidden'
        }
    };

    return {
        dependencies,
        alteredFields
    };
};

export default GlobalViewDependencies;