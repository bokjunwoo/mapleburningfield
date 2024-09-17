interface HistoryCategory {
  title: string;
  list: string[];
}

interface HistoryItem {
  id: number;
  date: string;
  category: HistoryCategory[];
}

interface HistoryProps {
  item: HistoryItem;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  item: FAQItem;
}
