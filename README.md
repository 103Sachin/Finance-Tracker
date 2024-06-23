# Finance-Tracker

# Folder Structure
FinanceTracker.UI/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── assets/
│   │   └── (images, fonts, etc.)
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── ...
│   │   ├── Dashboard/
│   │   │   └── Dashboard.js
│   │   ├── Expenses/
│   │   │   ├── AddExpense.js
│   │   │   ├── ExpenseList.js
│   │   │   └── ...
│   │   ├── Income/
│   │   │   ├── AddIncome.js
│   │   │   ├── IncomeList.js
│   │   │   └── ...
│   │   ├── Categories/
│   │   │   ├── AddCategory.js
│   │   │   ├── CategoryList.js
│   │   │   └── ...
│   │   ├── Goals/
│   │   │   ├── AddGoal.js
│   │   │   ├── GoalList.js
│   │   │   └── ...
│   │   ├── Notifications/
│   │   │   └── Notifications.js
│   │   ├── ThemeProvider/
│   │   │   └── ThemeProvider.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── ...
│   ├── redux/
│   │   ├── actions/
│   │   │   ├── authActions.js
│   │   │   ├── expenseActions.js
│   │   │   ├── incomeActions.js
│   │   │   ├── categoryActions.js
│   │   │   ├── goalActions.js
│   │   │   └── ...
│   │   ├── constants/
│   │   │   ├── authConstants.js
│   │   │   ├── expenseConstants.js
│   │   │   ├── incomeConstants.js
│   │   │   ├── categoryConstants.js
│   │   │   ├── goalConstants.js
│   │   │   └── ...
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── expenseReducer.js
│   │   │   ├── incomeReducer.js
│   │   │   ├── categoryReducer.js
│   │   │   ├── goalReducer.js
│   │   │   └── index.js
│   │   └── store.js
│   ├── utils/
│   │   └── axiosConfig.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json

#backend/
├── FinanceTracker.Api/
│   ├── Controllers/
│   │   ├── AuthController.cs
│   │   ├── ExpenseController.cs
│   │   ├── IncomeController.cs
│   │   ├── CategoryController.cs
│   │   ├── GoalController.cs
│   │   └── ...
│   ├── Models/
│   │   ├── User.cs
│   │   ├── Expense.cs
│   │   ├── Income.cs
│   │   ├── Category.cs
│   │   ├── Goal.cs
│   │   └── ...
│   ├── Data/
│   │   ├── AppDbContext.cs
│   │   └── SeedData.cs
│   ├── Services/
│   │   ├── AuthService.cs
│   │   ├── ExpenseService.cs
│   │   ├── IncomeService.cs
│   │   ├── CategoryService.cs
│   │   ├── GoalService.cs
│   │   └── ...
│   ├── DTOs/
│   │   ├── AuthDTOs.cs
│   │   ├── ExpenseDTOs.cs
│   │   ├── IncomeDTOs.cs
│   │   ├── CategoryDTOs.cs
│   │   ├── GoalDTOs.cs
│   │   └── ...
│   ├── Migrations/
│   │   └── ...
│   ├── Properties/
│   │   └── launchSettings.json
│   ├── appsettings.json
│   ├── Program.cs
│   ├── Startup.cs
│   ├── FinanceTracker.Api.csproj
│   └── ...
├── FinanceTracker.Core/
│   ├── Interfaces/
│   │   ├── IAuthService.cs
│   │   ├── IExpenseService.cs
│   │   ├── IIncomeService.cs
│   │   ├── ICategoryService.cs
│   │   ├── IGoalService.cs
│   │   └── ...
│   ├── Models/
│   │   └── (Shared models if any)
│   ├── Services/
│   │   └── (Shared services if any)
│   ├── FinanceTracker.Core.csproj
│   └── ...
├── FinanceTracker.Infrastructure/
│   ├── Repositories/
│   │   ├── AuthRepository.cs
│   │   ├── ExpenseRepository.cs
│   │   ├── IncomeRepository.cs
│   │   ├── CategoryRepository.cs
│   │   ├── GoalRepository.cs
│   │   └── ...
│   ├── FinanceTracker.Infrastructure.csproj
│   └── ...
├── tests/
│   ├── FinanceTracker.Api.Tests/
│   │   ├── Controllers/
│   │   │   ├── AuthControllerTests.cs
│   │   │   ├── ExpenseControllerTests.cs
│   │   │   ├── IncomeControllerTests.cs
│   │   │   ├── CategoryControllerTests.cs
│   │   │   ├── GoalControllerTests.cs
│   │   │   └── ...
│   │   ├── Services/
│   │   │   ├── AuthServiceTests.cs
│   │   │   ├── ExpenseServiceTests.cs
│   │   │   ├── IncomeServiceTests.cs
│   │   │   ├── CategoryServiceTests.cs
│   │   │   ├── GoalServiceTests.cs
│   │   │   └── ...
│   │   ├── FinanceTracker.Api.Tests.csproj
│   │   └── ...
│   └── FinanceTracker.Infrastructure.Tests/
│       ├── Repositories/
│       │   ├── AuthRepositoryTests.cs
│       │   ├── ExpenseRepositoryTests.cs
│       │   ├── IncomeRepositoryTests.cs
│       │   ├── CategoryRepositoryTests.cs
│       │   ├── GoalRepositoryTests.cs
│       │   └── ...
│       ├── FinanceTracker.Infrastructure.Tests.csproj
│       └── ...
├── .gitignore
├── README.md
└── ...
