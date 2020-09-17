class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :event_type
      t.date :event_date
      t.text :title
      t.string :speaker
      t.string :host
      t.boolean :published

      t.timestamps
    end
  end
end

# i used this to generate this model right from the CLI win win! \m/
# rails g model Event event_type:string event_date:date title:text speaker:string host:string published:boolean --force

