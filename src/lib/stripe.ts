import { Alert } from "react-native";
import { supabase } from "./supabase";
import { initPaymentSheet, presentPaymentSheet } from "@stripe/stripe-react-native";

const fetchPaymentSheetParams = async (amount: number) => {
    const { data, error } = await supabase.functions.invoke('payment-sheet', {
      body: { amount },
    });
  
    if (data) {
      return data;
    }
    Alert.alert(`Error: ${error?.message ?? 'no data'}`);
    return {};
  };
  
  export const initialisePaymentSheet = async (amount: number) => {
    const { paymentIntent, publishableKey } = await fetchPaymentSheetParams(amount);
  
    if (!publishableKey || !paymentIntent) return;
  
    const { error } = await initPaymentSheet({
      merchantDisplayName: 'notJust.dev',
      paymentIntentClientSecret: paymentIntent,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
  };
  
  export const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
          return false;
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
          return true;
    }
  };
