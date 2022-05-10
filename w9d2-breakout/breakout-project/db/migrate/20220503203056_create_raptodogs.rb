class CreateRaptodogs < ActiveRecord::Migration[6.1]
  def change
    create_table :raptodogs do |t|
      t.string :name
      t.string :height
      t.string :scary?

      t.timestamps
    end
  end
end
