# bamazon
 Amazon-like storefront with mySQL.User will be shown the existing products and can buy items.

# Node

*  mysql
*  inquirer

First install or update your local project's **npm** tools:

```bash
# First install all the NPM tools:
npm install
```
# Start the app

```bash
node bamazonCustomer.js
```

If database connection is successful, you should see
```bash
connected as id [number]
```

And then the inventory list

![ngm1_browser_support](https://lh3.googleusercontent.com/zCgt36iznxLwaw6BWF8585tdp12pfPJ7fYlYJ3u6pk65xQQfyucvvHBdSfE_eiluISgVgf_Lhhck5ywhuSa2SVbAfei2fnaEyJrKfGCCXV9zjkIeZVyV-eOBINXgewFrHjybUNEvCaLgtdlVcGZ73rZu21QdFI9wXjw21PzPV1EfptUCjY4BMFKLEZhteJClkQkZY1GfjSwJ8sTvkBcoOegNbDW98pP3keABy-7aNEaJgx4SdSXu792kYewLsBjPStze8kyvEYG-2Fang4i4-OZdPrndtsMkrVBTkQKWOp1ze2X6pOn2ClO5vSTKsJ-W2xh82VtHfwkWzKQF1fvC075zW-6BkO49vCdAzc9ASstQs9GmbYQ8OZ6zKRJtPLlA1CiU2gUEauGgcLlPqgywlRO4hcDqB8uSLL_rjxUtrYI5BpdnIiZW8IdTrd2nk54jgIACxLm71RQdV7mXbzrgw5uMZhDOfEw2rY6GqPJprJ5QOk12jL2g9lCX9IlWC46D_CJH9zk6YMsJPLUAdFjjnmRTrRPCf_AkiEVxdgrNYKk-C7dyNOpr32i0Qm1VKI7mu-PaVyEsXLt_q9cDTXUMdJFWVkUPMbPve6ZKSQncBSWlcoWz6aMewR3e=w569-h404-no)

# Using the app

Type in the id of the item you want to buy. In the above example that would be 1-11

![ngm1_browser_support](https://lh3.googleusercontent.com/ZQo7fA8Z-mkn5Ty0GkIt_q34AAo3rUuTA5Ta9oAKgUv854eAcIIT43TGH2c0zUIaBaKsYnTagauSBAYWH6B0ptXpKvaVee4cm9jROs-hpuGF2EUwtne-4b9t324ssdaSPjBtgHb4eta6KZlmhmUahovDFgRFjqncyqWKt5bVXzByd8G3R16GRZ4pHrx9uOyMf0WrHvSfrZNfeI6u8JbzLYkTC5qTlYiaL5i3tbouEQdZbjONmS-TLzQ6ueDPgxVMFCmRaCjdDk8j8RTOzTCwBhkHv_rp3S_FCGBLPK5BXtRgrjuHvWUKTAU9xF5cPQtwsU2BlwvV4M1_AjP1Xx5XEsen7ogiYvINLU2HNMMc5FRxDeaVuIEP7DfraDmPiB6nz62Z0WQg2essHsCkAVpAr_vSC3XHSxi_MpXojpOG_vW-_XqAEqV1yPNp7kFYHm8beibegE256WC3UwRdxiKpb8N8Bp5v_5pzCF3465WE4_6U5zlmQ4cVN4PKnyZLdNC71llFrPp64XTs0nk1GPE0i-y6sXuOjT7UpoT8HCssVufCkjyyHQZWqMzLKvfT4rKmDjOSKeHT0s637nE9oETyKpp8iiPmdkZBZ5X2XcfVG4BUu1MG9ck9Kvyk=w310-h35-no)

Once you have chosen an item, type the number of units you would like

![ngm1_browser_support](https://lh3.googleusercontent.com/B-uAWK6vp8dfxeCC-ky1SAqrEdgF2CnhmVYtI8sTKIV-E3IzSyUMkfBXj-Fu1LnT-8GWcDHAinJIQob0zHpSho2Uinz9tT_S4DqrK4UZWnsNJte0lMzTT7UAq6LA1x9O8abcZXkzx0XuEj67QyjI7pvTZEzrFzP-u_DvsjaHOi9fFoMxxka27P-PAYhFO4mKXvZ_SfUJ6nDb1AIvxwf1Jv9VwTKXra7bBITIZJy9kqTtj1QRseCBILjdpaPMN_zI6UIMNisy--Yy-0os0MBR1R64_RuKshX73SoVDc6rFC9jWxKe0tzatUuHDPkRf-s9XEVJCToq8mDkWoS8pGAYji1LlQtZ-uZ6kZFwb4PtVkJkddIMcwSU_geD9uu-vFzuiUXyldDr8o4iO_KimmAXfvX2Xj4CdtiP7TTDBnoS_P5bJta7LBwjOLQdijsEYKL5LSJmuiJ7Jt6zrQPj6_bzyaOLj38W7KePlMNZoBtONUiD0ADFucwLEeR0TSqBieRSgEjvmEB_YoOjPaVKOUcU6bX7SwT-CKerTcQgRd0ML2PaCZ9x9KXpC8t9VCESOiFgV083qfDUd3GjTKBrsvWkfaKdNzxP21u4VwGzsikspJIQeN49TT73=w327-h59-no)

If there is enough inventory you should be prompted with 
```node
Inventory successfully updated!
```
otherwise you will get
```node
Insufficient quantity
```

In both cases, the app restart and prompt you for what you would like to buy again.
 

