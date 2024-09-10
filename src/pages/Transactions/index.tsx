import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import transactions from "@/lib/data/transactions.json";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface Transactions {
	transactions: Transaction[];
}

export interface Transaction {
	institution_name: string;
	amount: number;
	categories: string[];
	date: Date;
	name: string;
}

const Home = () => {
	const { data } = useQuery({
		queryKey: ["transactionData"],
		queryFn: () => transactions,
	});
	const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
		[],
	);

	const categories =
		data?.transactions.map((transaction) => transaction.categories) || [];
	const uniqueCategories = [...new Set(categories.flat())];
	const transactionsToShow = selectedCategories.length
		? data?.transactions.filter((transaction) =>
				transaction.categories.some((category) =>
					selectedCategories.includes(category),
				),
			)
		: data?.transactions;

	const handleCategoryClick = (category: string) => {
		if (selectedCategories?.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
			return;
		}
		setSelectedCategories([...selectedCategories, category]);
	};

	return (
		<div className="w-full p-4 flex space-y-4 flex-col">
			<div className="flex space-x-4">
				{uniqueCategories.map((category) => (
					<Button
						variant="outline"
						onClick={() => handleCategoryClick(category)}
						className={`${selectedCategories.includes(category) ? "bg-gray-500 text-white" : ""}`}
						key={category}
					>
						{category} {selectedCategories.includes(category) ? "✓" : ""}
					</Button>
				))}
			</div>
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				{transactionsToShow?.map((transaction) => (
					<Card key={transaction.name}>
						<CardHeader>{transaction.name}</CardHeader>
						<CardContent>
							<div>{transaction.institution_name}</div>
							<div>{transaction.amount}</div>
							<div>{transaction.categories.join(", ")}</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Home;
